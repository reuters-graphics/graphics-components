import { HexAlphaColorPicker, HexColorInput } from 'react-colorful';

import React from 'react';
import classes from './styles.module.scss';
import { fromString } from 'css-color-converter';

const ColourPicker = ({ colour, onChange }) => {
  return (
    <div className={classes.colourpicker}>
      <HexColorInput color={fromString(colour.trim()).toHexString()} onChange={onChange} alpha prefixed />
      <HexAlphaColorPicker color={fromString(colour.trim()).toHexString()} onChange={onChange} />
    </div>
  )
}

export default ColourPicker;
