<script setup lang="ts">
interface SpecOption {
  label: string
  value: string
  price?: number
  disabled?: boolean
}

interface SpecGroup {
  name: string
  options: SpecOption[]
  multiple?: boolean
}

const props = defineProps<{
  groups: SpecGroup[]
}>()

const emit = defineEmits<{
  (e: 'change', specs: Record<string, string>): void
}>()

const selections = ref<Record<string, string>>({})

function toggleOption(groupIndex: number, optionIndex: number) {
  const group = props.groups[groupIndex]!
  const key = group.name
  const option = group.options[optionIndex]!

  if (group.multiple) {
    const current = selections.value[key] ?? ''
    const selected = current.split(',').filter(Boolean)
    if (selected.includes(option.value)) {
      selected.splice(selected.indexOf(option.value), 1)
      selections.value[key] = selected.join(',')
    } else {
      selected.push(option.value)
      selections.value[key] = selected.join(',')
    }
  } else {
    selections.value[key] = option.value
  }
  emit('change', { ...selections.value })
}

function isSelected(groupIndex: number, optionIndex: number): boolean {
  const group = props.groups[groupIndex]!
  const val = selections.value[group.name]
  if (!val) return optionIndex === 0
  if (group.multiple) return val.split(',').includes(group.options[optionIndex]!.value)
  return val === group.options[optionIndex]!.value
}
</script>

<template>
  <div class="space-y-5">
    <div
      v-for="(group, gi) in props.groups"
      :key="group.name"
      class="grid gap-3"
      :style="{ gridTemplateColumns: 'minmax(140px, 200px) 1fr' }"
    >
      <label class="text-sm font-medium text-secondary pt-2">
        {{ group.name }}
      </label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(opt, oi) in group.options"
          :key="opt.value"
          type="button"
          class="border border-border rounded-lg px-4 py-2 text-sm transition-all hover:border-primary bg-white cursor-pointer"
          :class="{ 'border-primary bg-primary/5 text-primary': isSelected(gi, oi) }"
          :disabled="opt.disabled"
          @click="toggleOption(gi, oi)"
        >
          <span>{{ opt.label }}</span>
          <span v-if="opt.price" class="ml-1 text-xs text-text/60">
            +Rp{{ opt.price.toLocaleString('id-ID') }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
