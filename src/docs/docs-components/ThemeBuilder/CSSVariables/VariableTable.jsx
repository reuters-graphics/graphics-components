import CopyTable from '../../CopyTable/Table';
import React from 'react';
import flatten from '../../../../components/Theme/utils/flatten.js';

const VariableTable = (props) => {
  const { theme } = props;
  const flatTheme = flatten(theme);
  const themeArray = Object.keys(flatTheme).map((key) => [`--theme-${key}`]);

  return (
    <CopyTable
      title=""
      header={['CSS variable']}
      note="You can also use the following CSS variables to reference values from your theme in SCSS"
      body={themeArray}
      copyable={[(v) => `var(${v})`]}
    />
  );
}

export default VariableTable;
