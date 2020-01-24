import { Adaptee } from './adpatee';

/**
 * The Target defines the domain-specific interface used by the client code.
 */
export class Target {
  public request(): string {
    return 'Target: The default target\'s behavior.';
  }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
export class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee
      .specificRequest()
      .split("")
      .reverse()
      .join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}
