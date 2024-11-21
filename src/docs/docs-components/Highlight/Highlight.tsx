import React, { ReactNode } from 'react';

interface HighlightProps {
  children: ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  const style: React.CSSProperties = {
    backgroundColor: '#FFF8DC', // Light yellow (Cornsilk)
    padding: '0.15em 0.25em',
    border: '1px solid rgb(255 239 177)',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    fontWeight: 'bold',
  };

  return <span style={style}>{children}</span>;
};

export default Highlight;
