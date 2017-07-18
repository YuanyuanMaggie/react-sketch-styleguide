/* @flow */
import React from 'react';
import { View} from 'react-sketchapp';
import Font from '../../components/Font'
import Label from '../../components/Label'

const FontColumn = ({fontGroup}) => (
  <View name={fontGroup.label} style={
      {
          paddingTop:15,
          paddingBottom: 15,
          flexWrap: 'wrap',
          flexDirection: 'column',
      }
  }>
    <Label>{fontGroup.label}</Label>
    {fontGroup.fonts.map((item, index) => (
        <Font key={index} font={item}/>
    ))}
  </View>
);

export default FontColumn;
