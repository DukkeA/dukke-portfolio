import type Lenis from "lenis";
export interface AnimationEngine {
  start(): void;
  refresh(): void;
  finishIntro(): void;
  closeCapability(): void;
  readonly lenis: Lenis | null;
  destroy(): void;
}
export function createAnimationEngine(root: HTMLElement, onResize?: () => void): AnimationEngine;
