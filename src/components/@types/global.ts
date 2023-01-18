import type { ComponentType } from 'svelte';

/**
 * Used for any props that restrict width of a container to one of pre-fab widths.
 */
export type ContainerWidth = 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';

/**
 * A step in the Scroller component.
 */
export interface ScrollerStep {
  altText?: string;
  /**
   * A background component
   * @required
   */
  background: ComponentType;
  /**
   * Optional props for background component
   */
  backgroundProps?: Object;
  /**
   * Foreground can either be a component or markdown-formatted string.
   * @required
   */
  foreground: ComponentType | string;
  /**
   * Optional props for foreground component
   */
  foregroundProps?: Object;
}
