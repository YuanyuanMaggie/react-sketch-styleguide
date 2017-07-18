/* @flow */
import React from 'react';
import { View} from 'react-sketchapp';
import FontSize from './FontSize'

type FontType = {
    font: any,
};
const Font = ({font} : FontType) => (
  <View name={font.label + ' Font Style'} style={
      {
          paddingTop:15,
          paddingBottom: 30,
      }
  }>
    <FontSize font={font}>
       {font.label + ', font size ' + font.fontSize + 'px' }
    </FontSize>
    
    <FontSize font={font}>
       {'line heigh '+ font.lineHeight + 'px' }
    </FontSize>
  </View>
);

export default Font;
