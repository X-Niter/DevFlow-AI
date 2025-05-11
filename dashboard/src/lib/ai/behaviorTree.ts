
// 🏗️ Behavior Tree Implementation for SmartAgent

export type NodeStatus = 'SUCCESS' | 'FAILURE' | 'RUNNING';

export abstract class Node {
  abstract tick(): NodeStatus;
}

export class Sequence extends Node {
  private children: Node[];
  private current = 0;

  constructor(children: Node[]) {
    super();
    this.children = children;
  }

  tick(): NodeStatus {
    while (this.current < this.children.length) {
      const status = this.children[this.current].tick();
      if (status === 'RUNNING') return 'RUNNING';
      if (status === 'FAILURE') {
        this.current = 0;
        return 'FAILURE';
      }
      this.current++;
    }
    this.current = 0;
    return 'SUCCESS';
  }
}

export class Selector extends Node {
  private children: Node[];
  private current = 0;

  constructor(children: Node[]) {
    super();
    this.children = children;
  }

  tick(): NodeStatus {
    while (this.current < this.children.length) {
      const status = this.children[this.current].tick();
      if (status === 'RUNNING') return 'RUNNING';
      if (status === 'SUCCESS') {
        this.current = 0;
        return 'SUCCESS';
      }
      this.current++;
    }
    this.current = 0;
    return 'FAILURE';
  }
}

export class ActionNode extends Node {
  private action: () => NodeStatus;

  constructor(action: () => NodeStatus) {
    super();
    this.action = action;
  }

  tick(): NodeStatus {
    return this.action();
  }
}
