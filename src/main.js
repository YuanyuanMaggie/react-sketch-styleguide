/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';

import Label from './components/Label';
import Palette from './components/Palette';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';



import Page from './components/Page';
import styled from 'styled-components/primitives';
import FontPage from './containers/FontPage';
const Container = ({ system }: { system: DesignSystem }) => (
  <View>
    <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 4 }}>
      <Label>
        Let's use this as an example of design with codding
      </Label>
    </View>

    <Section title="Type Styles">
      {Object.keys(system.fonts).map(name => (
        <TypeSpecimen name={name} style={TextStyles.get(name)} />
      ))}
    </Section>

    <Section title="Color Palette">
      <Palette colors={system.colors} />
    </Section>
  </View>
);

const Artboard = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: ${(750 + 8) * 4}px;
  justify-content: center;
`;

const Document = ({ system }: { system: DesignSystem }) => (
  <Artboard name="artboard">
    <Container system={system}/>
    <FontPage fontSetting={system.fontSetting}/>
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
