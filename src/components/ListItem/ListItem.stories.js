import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import list from './list';
import answers from './answers';
import ListItem from './ListItem';

storiesOf('List Item', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Item category', () => (
    <ListItem
      data={list}
      text={'Learn'}
      color="#06B6D4"
      iconType="material-community"
      iconName="arrow-right"
      onPress={() => console.log('Pressed to learn screen')}
    />
  ))
  .add('Item answer', () => (
    <ListItem
      data={answers}
      text={'Pick'}
      color="#06B6D4"
      iconType="material-community"
      iconName="arrow-right"
      onPress={() => console.log('Pressed to check the answer')}
    />
  ));
