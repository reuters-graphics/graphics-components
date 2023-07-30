import React, { useEffect, useState } from 'react';

import mermaid from 'mermaid';

const { mermaidAPI } = mermaid;

mermaidAPI.initialize({
  startOnLoad: false,
});

export default function Mermaid(props) {
  const { code, name } = props;
  const [graphSvg, setGraphSvg] = useState(null);

  useEffect(() => {
    if (!code) return;
    const parseMermaid = async (code) => {
      try {
        const { svg } = await mermaidAPI.render(name, code || '');
        setGraphSvg(svg);
      } catch (err) {
        setGraphSvg('');
        /* eslint-disable-next-line no-console */
        console.error('Invalid mermaid syntax: %o', err);
      }
    }

    parseMermaid(code);
  }, [code]);
  return (
    <div
      className="storybook-mermaid-graph"
      dangerouslySetInnerHTML={{ __html: graphSvg || '' }}
    />
  );
};