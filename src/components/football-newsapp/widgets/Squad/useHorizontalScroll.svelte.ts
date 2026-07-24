/**
 * Composable for horizontal scroll functionality with overflow detection.
 * Returns state and methods to implement a horizontally-scrollable rail with
 * overflow-driven fades / hints. No app or service coupling — pure runes.
 *
 * Ported from the World Cup app's `MatchesWidget/useHorizontalScroll` for the
 * Squad widget's rail/unified-card layout switch.
 */

export interface UseHorizontalScrollOptions {
  /** Fraction of container width to scroll. Defaults to 0.8. */
  scrollFraction?: number;
  /** Delay in ms before checking overflow after scroll. Defaults to 300. */
  scrollCheckDelay?: number;
  /** Threshold in pixels to determine if at start/end. Defaults to 5. */
  edgeThreshold?: number;
}

export interface HorizontalScroll {
  contentElement: HTMLElement | null;
  readonly hasOverflow: boolean;
  readonly isAtEnd: boolean;
  readonly isAtStart: boolean;
  scrollLeft: () => void;
  scrollRight: () => void;
  checkOverflow: () => void;
  setupScrollMonitoring: () => (() => void) | undefined;
}

export function useHorizontalScroll(
  options: UseHorizontalScrollOptions = {}
): HorizontalScroll {
  const {
    scrollFraction = 0.8,
    scrollCheckDelay = 300,
    edgeThreshold = 5,
  } = options;

  // State
  let contentElement = $state<HTMLElement | null>(null);
  let hasOverflow = $state(false);
  let isAtEnd = $state(false);
  let isAtStart = $state(true);

  /**
   * Check if content overflows and update scroll position state.
   */
  function checkOverflow() {
    if (!contentElement) return;

    const element = contentElement;
    hasOverflow = element.scrollWidth > element.clientWidth;
    isAtEnd =
      element.scrollLeft + element.clientWidth >=
      element.scrollWidth - edgeThreshold;
    isAtStart = element.scrollLeft <= edgeThreshold;
  }

  /**
   * Scroll right by the configured scroll fraction. If the next step would
   * land within `edgeThreshold` of the end, snap to the end exactly so the
   * user can reach the final card.
   */
  function scrollRight() {
    if (!contentElement) return;

    const el = contentElement;
    const scrollAmount = el.clientWidth * scrollFraction;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = Math.min(el.scrollLeft + scrollAmount, maxScroll);
    const finalLeft = target >= maxScroll - edgeThreshold ? maxScroll : target;

    el.scrollTo({
      left: finalLeft,
      behavior: 'smooth',
    });

    setTimeout(checkOverflow, scrollCheckDelay);
  }

  /**
   * Scroll left by the configured scroll fraction. If the next step would
   * land within `edgeThreshold` of the start, snap to 0 exactly so the user
   * can reach the first card.
   */
  function scrollLeft() {
    if (!contentElement) return;

    const el = contentElement;
    const scrollAmount = el.clientWidth * scrollFraction;
    const target = Math.max(el.scrollLeft - scrollAmount, 0);
    const finalLeft = target <= edgeThreshold ? 0 : target;

    el.scrollTo({
      left: finalLeft,
      behavior: 'smooth',
    });

    setTimeout(checkOverflow, scrollCheckDelay);
  }

  /**
   * Setup scroll monitoring — call this in a `$effect`.
   * @returns Cleanup function
   */
  function setupScrollMonitoring(): (() => void) | undefined {
    if (!contentElement) return;

    const element = contentElement;
    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(element);

    element.addEventListener('scroll', checkOverflow);

    return () => {
      resizeObserver.disconnect();
      element.removeEventListener('scroll', checkOverflow);
    };
  }

  return {
    // State (read-only getters)
    get contentElement() {
      return contentElement;
    },
    set contentElement(value: HTMLElement | null) {
      contentElement = value;
    },
    get hasOverflow() {
      return hasOverflow;
    },
    get isAtEnd() {
      return isAtEnd;
    },
    get isAtStart() {
      return isAtStart;
    },
    // Methods
    scrollLeft,
    scrollRight,
    checkOverflow,
    setupScrollMonitoring,
  };
}
