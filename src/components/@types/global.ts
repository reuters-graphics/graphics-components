import type { Component } from 'svelte';

/**
 * Used for the list of <option> tags nested in a <select> input.
 */
export type Option = {
  value: string;
  text: string;
};

/**
 * Used for any props that restrict width of a container to one of pre-fab widths.
 */
export type ContainerWidth =
  | 'narrower'
  | 'narrow'
  | 'normal'
  | 'wide'
  | 'wider'
  | 'widest'
  | 'fluid';

/**
 * Used to set headline class fluid size from text-2xl to text-6xl
 */
export type HeadlineSize = 'small' | 'normal' | 'big' | 'bigger' | 'biggest';
/**
 * A step in the Scroller component.
 */
export interface ScrollerStep {
  /**
   * A background component
   */
  background: Component;
  /**
   * Optional props for background component
   */
  backgroundProps?: object;
  /**
   * A component or markdown-formatted string
   */
  foreground: Component | string;
  /**
   * Optional props for foreground component
   */
  foregroundProps?: object;
  /**
   * Optional alt text for the background, read aloud after the foregroud text. You can add it to each step or just to the first step to describe the entire scroller graphic.
   */
  altText?: string;
}

export type ForegroundPosition =
  | 'middle'
  | 'left'
  | 'right'
  | 'left opposite'
  | 'right opposite';
