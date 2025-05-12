// src/lib/ai/agent.ts
import { memory as agentMemory } from './agentMemory'

export class SmartAgent {
  private memory = agentMemory

  constructor() {
    this.log('SmartAgent initialized')
  }

  private log(msg: string) {
    console.log(`[SmartAgent] ${msg}`)
  }

  // …your other methods here…
}

export const agent = new SmartAgent()
