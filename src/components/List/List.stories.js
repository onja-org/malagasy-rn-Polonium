import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import list from '../ListItem/list';
import answers from '../ListItem/answers';
import List from './List';

storiesOf('List', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('List of category', () => (
    <List
      data={list}
      text={'Learn'}
      color="#06B6D4"
      iconType="material-community"
      iconName="arrow-right"
    />
  ))
  .add('List of answer', () => (
    <List
      data={answers}
      text={'Pick'}
      color="#06B6D4"
      iconType="material-community"
      iconName="arrow-right"
    />
  ));
