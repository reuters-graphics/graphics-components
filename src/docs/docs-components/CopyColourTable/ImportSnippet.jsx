import React, { useEffect, useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
// @ts-ignore scss
import classes from './styles.module.scss';
import { prismNord } from '../syntax/nord';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('javascript', javascript);

const formatPartial = (partial) => {
  return partial.replace(/(^|\/)_/, '$1').replace(/\.scss$/, '');
};

const Copyable = (props) => {
  const [copied, setCopied] = useState(false);

  let timeout;

  useEffect(() => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      setCopied(false);
    }, 1500);
  }, [copied]);

  const handleClick = async ({ text }) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <button className="copy-btn" onClick={() => handleClick(props)}>
      <span className="material-symbols-outlined">content_copy</span>
      {copied && <span className="copy-tag">Copied</span>}
    </button>
  );
};

const Snippet = ({ language, comment, text }) => (
  <div className={classes.importsnippet}>
    <SyntaxHighlighter language={language} style={prismNord}>
      {`${comment} \n${text}`}
    </SyntaxHighlighter>
    <Copyable text={text} />
  </div>
);

const ImportSnippet = ({
  included = false,
  partial = 'thematic/_tr.scss',
  js,
}) => {
  return (
    <>
      {included ?
        <div className={classes.importsnippet}>
          <p>Included</p>
        </div>
      : <Snippet
          language="scss"
          comment="// global.scss"
          text={`@use "@reuters-graphics/graphics-components/scss/colours/${formatPartial(partial)}";`}
        />
      }
      {js && (
        <Snippet
          language="javascript"
          comment="// JavaScript"
          text={`import { ${js} } from '@reuters-graphics/graphics-components/colours';`}
        />
      )}
    </>
  );
};

export default ImportSnippet;
