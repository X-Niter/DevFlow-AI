// @ts-nocheck
import { Sequence, Selector, ActionNode } from './behaviorTree'


import * as optimize from './skills/optimize'
const skills = { optimize }

// 🚀 Smart Local Agent Brain (expandable for local learning, memory, and behavior trees)

export class SmartAgent {

  // Behavior Tree decision method
  decide(goal: string): string {
    const checkOptimize = new ActionNode(() => {
      return goal.includes('optimize') ? 'SUCCESS' : 'FAILURE';
    });
    const optimizeAction = new ActionNode(() => {
      const res = this.selfImprove('optimize ' + goal);
      this.log(res);
      return 'SUCCESS';
    });
    const fallback = new ActionNode(() => {
      this.log('No applicable action for goal: ' + goal);
      return 'SUCCESS';
    });

    const tree = new Sequence([checkOptimize, optimizeAction]);
    const selector = new Selector([tree, fallback]);
    selector.tick();
    this.memory.set('lastDecision_' + goal, 'Decision executed for goal: ' + goal);
    return 'Decision executed for goal: ' + goal;
  }
}

  import { memory } from './agentMemory'

  private memory = memory

  constructor() {
    this.log('SmartAgent initialized')
  }

  log(message: string) {
    console.log('[SmartAgent]', message)
  }

  learn(key: string, value: any) {
    this.memory.set(key, value)
    this.log(`Learned: ${key} = ${JSON.stringify(value)}`)
  }

  recall(key: string) {
    return this.memory.get(key)
  }

  selfImprove(prompt: string) {
    // Simulated AI logic — extend with LLM, finetuned embeddings, or WASM in future
    if (prompt.includes('optimize')) {
      return skills.optimize.optimizeSystem(prompt);
      return 'Running code optimization subroutine...'
    } else if (prompt.includes('fix')) {
      return 'Scanning for bugs and applying automated patches...'
    }
    return 'Processing prompt with internal logic...'
  }

  summarize() {
    return Object.keys(this.memory.dump()).length > 0
      ? 'Known concepts: ' + Object.keys(this.memory.dump()).join(', ')
      : 'Memory empty.'
  }
}

export const agent = new SmartAgent()
