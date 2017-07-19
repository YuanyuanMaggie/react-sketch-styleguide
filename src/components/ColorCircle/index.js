/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';

type ColorType = {
    color: any,
};

const ColorCircle = ({color} : ColorType) => (
    <View name={'Color:' + color.circleColor} style={{marginBottom:20}}>
        <View name='Color Circle' style={
            {
            borderRadius: color.radius * 2,
            width: color.radius * 2,
            height: color.radius * 2,
            backgroundColor: color.circleColor,
            borderWidth: 1,
            borderColor: color.border? '#ccc':'color.color',
            alignItem: 'center',
            justifyContent: 'center',
            marginTop: 15,
            marginBottom: 15,
            marginRight:20,
            }
        }>    
            <Text style={{color:color.fontColor, textAlign: 'center'}}>
                    {color.label}
            </Text>
        </View>
        <Text sytle={{fontSize:16, textAlign: 'center'}}>
            {color.circleColor}
        </Text>
    </View>
);

export default ColorCircle;
