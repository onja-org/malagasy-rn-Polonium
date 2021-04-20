import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import Button from './NextButton';

storiesOf('Next Button', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Next button', () => (
    <Button
      isDisabled={false}
      textColor="#FFFFFF"
      text="Next"
      onPress={action('clicked-text')}
    />
  ))
  .add('Add button', () => (
    <Button
      isDisabled={true}
      textColor="#06B6D4"
      text="Add"
      onPress={action('clicked-text')}
    />
  ))
  .add('Reshuffle button', () => (
    <Button
      isDisabled={false}
      textColor="#FFFFFF"
      text="Reshuffle"
      onPress={action('clicked-text')}
    />
  ));
