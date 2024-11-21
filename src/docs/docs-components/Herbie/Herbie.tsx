import React from 'react';

interface InlineNumberProps {
  number: number;
  children: React.ReactNode; // Allow children to be passed
}

const InlineNumber: React.FC<InlineNumberProps> = ({ number, children }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start', // Align items at the top
    gap: '0.5em',
    marginTop: '1.5em',
  };

  const numberStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0 156 253)',
    color: 'white',
    borderRadius: '50%',
    width: '1.8em',
    height: '1.8em',
    fontSize: '1em',
    fontWeight: 'bold',
    lineHeight: '1',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    flexShrink: 0, // Prevent shrinking
  };

  const textStyle: React.CSSProperties = {
    paddingTop: '0.25em',
    fontSize: '1em',
    lineHeight: '1.4em', // Adjust line height for readability
    wordBreak: 'break-word', // Handle long words gracefully
  };

  return (
    <div style={containerStyle}>
      <div style={numberStyle}>{number}</div>
      <div style={textStyle}>{children}</div>
    </div>
  );
};

export default InlineNumber;
