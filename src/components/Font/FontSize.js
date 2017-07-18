/* @flow */
import React from 'react';
import { Text } from 'react-sketchapp';

type FontType = {
    font: any,
};

const FontSize = ({font, children} : FontType) => (
    <Text style={
      {
      fontWeight: font.fontWeight,
      fontSize: font.fontSize,
      lineHeight: font.lineHeight,
    }
  }>
       {children}
    </Text>
);

export default FontSize;
