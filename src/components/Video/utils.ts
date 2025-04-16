import type { ControlsPosition } from './types';

/** Returns the CSS positions for the controls button */
export const getButtonPosition = (
  controlsPosition: ControlsPosition,
  borderOffset: number
) => {
  if (controlsPosition === 'top left')
    return `top: ${borderOffset}px; left: ${borderOffset}px;`;
  if (controlsPosition === 'top right')
    return `top: ${borderOffset}px; right: ${borderOffset}px;`;
  if (controlsPosition === 'bottom left')
    return `bottom: ${borderOffset}px; left: ${borderOffset}px;`;
  if (controlsPosition === 'bottom right')
    return `bottom: ${borderOffset}px; right: ${borderOffset}px;`;

  // Otherwise, centre it
  return `top: 50%; left: 50%; transform: translate(-50%, -50%);`;
};
