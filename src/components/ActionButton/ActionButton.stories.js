import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import ActionButton from './ActionButton';

storiesOf('Action Button', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Action button learn', () => (
    <ActionButton 
      text="Learn"
      color="#06B6D4" 
      iconType="material-community" 
      iconName="arrow-right" 
      onPress={action('clicked-action-button')}/>
  ))
  .add('Action button pick', () => (
    <ActionButton 
      text="Pick" 
      color="#06B6D4" 
      iconType="material-community" 
      iconName="arrow-right" 
      onPress={action('clicked-action-button')}/>
  ))
  .add('Action button correct', () => (
    <ActionButton
      text="Correct" 
      color="#06D440" 
      iconType="octicon" 
      iconName="check"
      onPress={action('clicked-action-button')}/>
  ))
  .add('Action button wrong', () => (
    <ActionButton 
      text="Wrong" 
      color="#D4068E" 
      iconName="close"
      onPress={action('clicked-action-button')}/>
  ))
