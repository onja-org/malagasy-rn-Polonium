import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import ToolButton from './ToolButton';
import AddIcon from './assets/add.svg';
import CheckIcon from './assets/check.svg';
import CheckAllIcon from './assets/check-all.svg';
import BackIcon from './assets/back.svg';
import ModeIcon from './assets/mode.svg';

storiesOf('Tool Button', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Add', () => (
    <ToolButton onPress={action('clicked-add-button')}>
      <AddIcon width={24} height={24} fill="#FFFFFF" />
    </ToolButton>
  ))
  .add('Check', () => (
    <ToolButton onPress={action('clicked-check-button')}>
      <CheckIcon width={24} height={24} fill="#FFFFFF" />
    </ToolButton>
  ))
  .add('Check all', () => (
    <ToolButton onPress={action('clicked-check-all-button')}>
      <CheckAllIcon width={24} height={24} fill="#FFFFFF" />
    </ToolButton>
  ))
  .add('Back', () => (
    <ToolButton onPress={action('clicked-back-button')}>
      <BackIcon width={24} height={24} fill="#FFFFFF" />
    </ToolButton>
  ))
  .add('Mode', () => (
    <ToolButton onPress={action('clicked-mode-button')}>
      <ModeIcon width={24} height={24} fill="#FFFFFF" />
    </ToolButton>
  ));
