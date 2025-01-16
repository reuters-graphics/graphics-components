import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, PANEL_ID } from './constants';
import Tab from './Tab';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Docs',
    match: ({ viewMode }) => viewMode === 'story',
    render: (props) => <Tab {...props} />,
  });
});
