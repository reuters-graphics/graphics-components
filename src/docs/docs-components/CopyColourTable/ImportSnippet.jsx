import React, { useEffect, useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
// @ts-ignore scss
import classes from './styles.module.scss';
import { prismNord } from '../syntax/nord';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';

SyntaxHighlighter.registerLanguage('scss', scss);

const formatPartial = (partial) => {
  return partial.replace(/\/_/, '/').replace(/\.scss$/, '');
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

  const handleClick = async ({ partial }) => {
    const copyText = `@import "@reuters-graphics/graphics-components/scss/colours/${formatPartial(partial)}";`;
    await navigator.clipboard.writeText(copyText);
    setCopied(true);
  };

  return (
    <button className="copy-btn" onClick={() => handleClick(props)}>
      <span className="material-symbols-outlined">content_copy</span>
      {copied && <span className="copy-tag">Copied</span>}
    </button>
  );
};

const ImportSnippet = ({ included = false, partial = 'thematic/_tr.scss' }) => {
  return included ?
      <div className={classes.importsnippet}>
        <p>Included</p>
      </div>
    : <div className={classes.importsnippet}>
        <SyntaxHighlighter language="scss" style={prismNord}>
          {`// global.scss \n@import "@reuters-graphics/graphics-components/scss/colours/${formatPartial(partial)}";`}
        </SyntaxHighlighter>
        <Copyable partial={partial} />
      </div>;
};

export default ImportSnippet;
