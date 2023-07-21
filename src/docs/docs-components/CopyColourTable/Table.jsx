import React, { useEffect, useState } from 'react';

import { Unstyled } from '@storybook/blocks';
// @ts-ignore
import classes from './styles.module.scss';

const Copyable = (props) => {
  const handleClick = async(props) => {
    const copyText = props.wrap ? `var(${props.children})` : props.children;
    await navigator.clipboard.writeText(copyText);
    props.setCopied(true);
  }

  return (
    <button className="copy-btn" onClick={() => handleClick(props)}>
      <span className="material-symbols-outlined">content_copy</span>{props.children}
      {props.copied && <div className="copy-tag">Copied</div>}
    </button>
  );
}

const Cell = (props) => {
  const [copied, setCopied] = useState(false);

  let timeout;

  useEffect(() => {
    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(() => { setCopied(false); }, 1000);
  }, [copied]);

  const copyProps = {...props, ...{ copied, setCopied } };

  return props.column === 0 ?
    <div className="swatch-container">
      <div className="swatch" style={{ backgroundColor: props.children }}></div>
      <span>
        <Copyable {...copyProps}>{props.children}</Copyable>
      </span>
    </div>
  : props.children.map(css => (
    <div key={css}>
      <Copyable {...copyProps} wrap>{css}</Copyable>
    </div>
  ));
}

  const TD = (props) => <td><Cell {...props}>{props.children}</Cell></td>
const TR = (props) => <tr>{props.children.map((c, i) => (<TD {...props} column={i}>{c}</TD>))}</tr>
const TH = (props) => <th>{props.children}</th>;

const CopyTable = ({ title = null, header, body, copyable, mdnLink = null }) => {
  return (
    <Unstyled>
      <div className={classes.title}>
        {title}
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            {header.map(h => (<TH>{h}</TH>))}
          </tr>
        </thead>
        <tbody>
          {body.map(b => (<TR {...{ title, header, body, copyable, mdnLink}}>{b}</TR>))}
        </tbody>
      </table>
    </Unstyled>
  )
};

export default CopyTable;