import React, { useState } from 'react';

import Value from './Value.jsx';

const Key = ({ value, name, map, themeName, setTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="key">
      <button className={isOpen ? 'open' : ''} onClick={() => setIsOpen(o => !o)}>
        <div>
          <span className="material-symbols-outlined">{isOpen ? 'expand_less' : 'expand_more'}</span>
        </div> {name}
      </button>
      
      {Object.entries(value).map(([key, value]) => {
        const props = {
          theme,
          setTheme,
          name: key,
          themeName,
          map: map + '.' + key,
          value,
          key: themeName + map + key,
        };
        if (!isOpen) return null;
        if (typeof value === 'object') return <Key {...props} />;
        return <Value {...props} />;
      })}
    </div>
  );
}

export default Key;
