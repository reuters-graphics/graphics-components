import React, { useState } from 'react';
import { cloneDeep, set } from 'lodash-es';

import ColourPicker from './ColourPicker.jsx';

const Input = ({ value, onChange }) => {
  // Number type
  // this is buggy...
  // if ((value || value === 0) && !isNaN(value)) return <input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))}/>;
  // Colour type
  if (!/var\(.*\)/i.test(value) && CSS.supports('color', value)) return (
    <ColourPicker colour={value} onChange={onChange} />
  );
  // Text for the rest...
  return <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />;
}

const Value = ({ value, name, map, themeName, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (newValue) => {
    const mutableTheme = cloneDeep(theme);
    set(mutableTheme, map, newValue);
    setTheme(mutableTheme);
  };

  return (
    <div className="value">
      <label>
        <div>
          <button className={isOpen ? 'open' : ''} onClick={() => setIsOpen(o => !o)}>
            <div>
              <span className="material-symbols-outlined">{isOpen ? 'expand_less' : 'expand_more'}</span>
            </div> {name}
          </button>
        </div>
      </label>
      {isOpen && (
        <div className="input-container">
          <Input value={value} key={themeName+map} onChange={onChange}/>
        </div>
      )}
    </div>
  );
}

export default Value;