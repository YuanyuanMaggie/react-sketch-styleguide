/* @flow */
import React from 'react';
import { View} from 'react-sketchapp';
import ColorColumn from './ColorColumn';
import Page from '../../components/Page';

const ColorPage = ({colorSetting}) => (
  <Page name="Color Brand" width={1000}>
      <View name={'color groups'} style={{
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexDirection: 'row',
      }}>
        {colorSetting.map((item, index) => (
           <ColorColumn colorGroup={item} key={index}/>
        ))
        }
      </View>
</Page>
);

export default ColorPage;
