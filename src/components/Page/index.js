/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import PageTitle from '../PageTitle'

const PAGE_WIDTH = 750;
const PAGE_HEIGHT = 1000;

type PageType = {
  name?: string,
  width?:number,
  height?:number,
  children?: any,
};

const Page = ({name, width, height, children}: PageType) => (
  <View name={'Page-'+name} style={{ 
      width: width|| PAGE_WIDTH,
      height: height|| PAGE_HEIGHT,
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
