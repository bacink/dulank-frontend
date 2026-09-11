interface LegacyPageOptions {
  title: string
  styles?: string[]
  scripts?: string[]
  sweetAlert?: boolean
  onScriptsLoaded?: () => void
}

const loadedScripts = new Set<string>()
let patchRefCount = 0
let capturedCallbacks: EventListener[] = []

export function useLegacyPage(options: LegacyPageOptions) {
  const links = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css' },
    ...(options.sweetAlert ? [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/sweetalert2@11.22.2/dist/sweetalert2.min.css' }] : []),
    ...(options.styles || []).map(href => ({ rel: 'stylesheet', href })),
  ]

  useHead({ title: options.title, link: links })

  onMounted(async () => {
    if (options.sweetAlert && !(window as any).Swal) {
      await loadExternalScript('https://cdn.jsdelivr.net/npm/sweetalert2@11.22.2/dist/sweetalert2.all.min.js')
    }

    patchRefCount++
    const originalAdd = document.addEventListener.bind(document)
    const patchedAdd: typeof document.addEventListener = ((type: string, listener: EventListenerOrEventListenerObject, opts?: boolean | AddEventListenerOptions) => {
      if (type === 'DOMContentLoaded') {
        capturedCallbacks.push(typeof listener === 'function' ? listener : (e: Event) => listener.handleEvent(e))
        return
      }
      return originalAdd(type, listener, opts as any)
    }) as typeof document.addEventListener

    ;(document as any).addEventListener = patchedAdd
    try {
      for (const src of options.scripts || []) {
        if (loadedScripts.has(src)) continue
        loadedScripts.add(src)
        const response = await fetch(src)
        if (!response.ok) throw new Error(`Failed to load legacy script: ${src}`)
        const code = await response.text()
        const fn = new Function(code + `\n//# sourceURL=${src}`)
        fn.call(window)
      }
    } catch (error) {
      console.error('[Dulank legacy runtime]', error)
    } finally {
      patchRefCount--
      if (patchRefCount === 0) {
        ;(document as any).addEventListener = originalAdd
        const event = new Event('DOMContentLoaded')
        capturedCallbacks.forEach(callback => {
          try { callback.call(document, event) } catch (error) { console.error('[Dulank page init]', error) }
        })
        capturedCallbacks = []
        options.onScriptsLoaded?.()
      }
    }
  })
}

function loadExternalScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null
    if (existing) {
      if (existing.dataset.loaded === 'true') resolve()
      else existing.addEventListener('load', () => resolve(), { once: true })
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.addEventListener('load', () => { script.dataset.loaded = 'true'; resolve() }, { once: true })
    script.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true })
    document.head.appendChild(script)
  })
}
