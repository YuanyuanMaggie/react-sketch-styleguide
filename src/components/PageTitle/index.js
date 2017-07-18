/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import styled from 'styled-components/primitives';

const Title = styled.Text`
  font-family: Arial Black;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.4px;
`
const PageTitle = ({name}) => (
  <View name={'PageTitle'}>
    <Title name={name}>
        {name}
    </Title>
  </View>
);

export default PageTitle;
