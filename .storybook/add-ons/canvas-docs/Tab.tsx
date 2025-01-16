import React from 'react';
import { useParameter, useStorybookState } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import { PARAM_KEY } from './constants.ts';
import * as Blocks from '@storybook/blocks';

interface PanelProps {
  active: boolean | undefined;
}

const Tab: React.FC<PanelProps> = (props) => {
  const { storyId } = useStorybookState(); // Get the current story ID
  const markdownContent = useParameter<Record<string, string>>(PARAM_KEY, {});

  // Fetch Markdown content specific to the current story
  const content =
    markdownContent[storyId] || 'No documentation provided for this story.';

  console.log('PROPS', props);

  return (
    <AddonPanel active={!!props.active}>
      <Blocks.Wrapper>
        <div style={{ padding: '15px' }} className="sbdocs sbdocs-content">
          <Blocks.Markdown>{content}</Blocks.Markdown>
        </div>
      </Blocks.Wrapper>
    </AddonPanel>
  );
};

export default Tab;
