import React from 'react';
import { Unstyled } from '@storybook/blocks';
import classes from './styles.module.scss';

const handleClick = async(props) => {
  const copyText = typeof props.copyable[props.column] === 'function' ?
    props.copyable[props.column](`${props.children}`) : `${props.children}`;
  await navigator.clipboard.writeText(copyText);
}

const MultiLine = (props) => props.children.split('\n').map(t => (<div>{t}</div>))

const Copyable = (props) => props.copyable && props.copyable[props.column] ?
  <button onClick={() => handleClick(props)}>
    <span className="material-symbols-outlined">content_copy</span>{props.children}
  </button> :
  <MultiLine>{props.children}</MultiLine>;
const TD = (props) => <td><Copyable {...props}>{props.children}</Copyable></td>
const TR = (props) => <tr>{props.children.map((c, i) => (<TD {...props} column={i}>{c}</TD>))}</tr>
const TH = (props) => <th>{props.children}</th>;

const CopyTable = (props) => {
  return (
    <Unstyled>
      <table className={classes.table}>
        <thead>
          <tr>
            {props.header.map(h => (<TH>{h}</TH>))}
          </tr>
        </thead>
        <tbody>
          {props.body.map(b => (<TR {...props}>{b}</TR>))}
        </tbody>
      </table>
    </Unstyled>
  )
};

export default CopyTable;