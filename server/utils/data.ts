import { readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const dataDir = resolve(process.cwd(), 'server', 'data')

export function readJSON<T>(filename: string): T {
  const raw = readFileSync(join(dataDir, filename), 'utf-8')
  return JSON.parse(raw) as T
}

export function writeJSON<T>(filename: string, data: T): void {
  writeFileSync(join(dataDir, filename), JSON.stringify(data, null, 2), 'utf-8')
}

export function createResponse<T>(data: T, meta?: Record<string, unknown>) {
  return { success: true, data, ...(meta ? { meta } : {}) }
}
