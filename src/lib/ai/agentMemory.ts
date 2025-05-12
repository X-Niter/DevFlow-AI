
// 🧠 Persistent Memory System (stub — wire into localStorage, DB, or file I/O for real)

export class AgentMemory {
  private cache: Record<string, any> = {}

  constructor() {
    this.load()
  }

  load() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('agent_memory')
      if (saved) {
        this.cache = JSON.parse(saved)
        console.log('[AgentMemory] Loaded from localStorage')
      }
    }
  }

  save() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('agent_memory', JSON.stringify(this.cache))
      console.log('[AgentMemory] Saved to localStorage')
    }
  }

  set(key: string, value: any) {
    this.cache[key] = value
    this.save()
  }

  get(key: string) {
    return this.cache[key]
  }

  dump() {
    return this.cache
  }
}

export const memory = new AgentMemory()
