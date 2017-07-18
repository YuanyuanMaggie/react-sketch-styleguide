/* @flow */
import React from 'react';
import { View} from 'react-sketchapp';
import FontColumn from './FontColumn';
import Page from '../../components/Page';

const FontPage = ({fontSetting}) => (
  <Page name="Mobile Font Size">
      <FontColumn fontGroup={fontSetting.big}/>
      <View name={'font groups'} style={{
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexDirection: 'row',
      }}>
        {fontSetting.fontsgroup.map((item, index) => (
           <FontColumn fontGroup={item} key={index}/>
        ))
        }
      </View>
</Page>
);

export default FontPage;
