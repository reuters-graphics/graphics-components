/**
 * A single question/answer pair rendered by the `FaqBox` component.
 */
export interface FaqItem {
  /** The question, shown as the always-visible disclosure summary. */
  q: string;
  /**
   * The answer as a markdown string, revealed when the item is expanded.
   * Inline links and emphasis are supported.
   */
  a: string;
}
