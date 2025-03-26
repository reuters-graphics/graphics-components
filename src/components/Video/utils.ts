import type { ControlsPosition } from './types';

/** Returns the pixel values for positioning the controls button */
export const getButtonPosition = (
  controlsPosition: ControlsPosition,
  borderOffset: number
) => {
  if (controlsPosition === 'top left')
    return {
      top: borderOffset,
      left: borderOffset,
    };
  if (controlsPosition === 'bottom left')
    return {
      bottom: borderOffset,
      left: borderOffset,
    };
  if (controlsPosition === 'bottom right')
    return {
      bottom: borderOffset,
      right: borderOffset,
    };
  return {
    top: borderOffset,
    right: borderOffset,
  };
};
