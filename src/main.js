/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';


import styled from 'styled-components/primitives';
import FontPage from './containers/FontPage';
import ColorPage from './containers/ColorPage';

const Artboard = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Document = ({ system }: { system: DesignSystem }) => (
  <Artboard name="artboard">
    <FontPage fontSetting={system.fontSetting}/>
    <ColorPage colorSetting={system.colorCircles} />
  </Artboard>
);

export default (context: any) => {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    designSystem.fonts,
  );

  render(<Document system={designSystem} />, context.document.currentPage());
}
