/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import PageTitle from '../PageTitle'

const PAGE_WIDTH = 750;
const PAGE_HEIGHT = 1000;

type PageType = {
  name?: string,
  children?: any,
};

const Page = ({name, children}: PageType) => (
  <View name={'Page-'+name} style={{ 
      width: PAGE_WIDTH,
      height: PAGE_HEIGHT,
      paddingLeft: 30, 
      paddingRight: 30,
      paddingTop: 30,
      padidngBottom: 30,  
      borderWidth: 1, 
      borderColor: '#ccc'}}>
      <PageTitle name={name}/>
      <View>
          {children}
      </View>
    
  </View>
);

export default Page;
