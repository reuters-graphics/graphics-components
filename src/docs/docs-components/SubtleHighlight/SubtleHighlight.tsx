import React, { ReactNode } from 'react';

interface HighlightProps {
  children: ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  const style: React.CSSProperties = {
    backgroundColor: '#fff5cd',
    padding: '0.15em 0.3em',
  };

  return <span style={style}>{children}</span>;
};

export default Highlight;
