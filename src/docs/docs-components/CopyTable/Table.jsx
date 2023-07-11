import React, { useEffect, useState } from 'react';

import { Unstyled } from '@storybook/blocks';
// @ts-ignore
import classes from './styles.module.scss';

const MultiLine = (props) => props.children.split('\n').map(t => (<div>{t}</div>))

const Copyable = (props) => {
  const handleClick = async(props) => {
    const copyText = typeof props.copyable[props.column] === 'function' ?
      props.copyable[props.column](`${props.children}`) : `${props.children}`;
    await navigator.clipboard.writeText(copyText);
    setCopied(true);
  }

  const [copied, setCopied] = useState(false);

  let timeout;

  useEffect(() => {
    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(() => { setCopied(false); }, 1000);
  }, [copied]);

  return props.copyable && props.copyable[props.column] ?
  <button className="copy-btn" onClick={() => handleClick(props)}>
    <span className="material-symbols-outlined">content_copy</span>{props.children}
    {copied && <div className="copy-tag">Copied</div>}
  </button> :
  <MultiLine>{props.children}</MultiLine>;
}

  const TD = (props) => <td><Copyable {...props}>{props.children}</Copyable></td>
const TR = (props) => <tr>{props.children.map((c, i) => (<TD {...props} column={i}>{c}</TD>))}</tr>
const TH = (props) => <th>{props.children}</th>;

const CopyTable = ({ title = null, header, body, copyable, mdnLink = null }) => {
  return (
    <Unstyled>
      <div className={classes.title}>
        {title}
        {(title && mdnLink) && (
          <a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/${mdnLink}`} target="_blank">
            <span className="material-symbols-outlined">link</span>
          </a>
        )}
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