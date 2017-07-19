/* @flow */
import React from 'react';
import { View, Text} from 'react-sketchapp';
import ColorCircle from '../../components/ColorCircle'

const ColorColumn = ({colorGroup}) => (
  <View name={colorGroup.label} >
    <Text style={{textAlign:'center', marginBottom:15}}>{colorGroup.label}</Text>
    <View name='Color Group' style={
      {
          paddingTop:15,
          paddingBottom: 15,
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          width: 280,
        }
        }>
        {colorGroup.colors.map((item, index) => (
            <ColorCircle key={index} color = {item} />
        ))}
    </View>
  </View>
);

export default ColorColumn;
