import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import {View} from 'react-native';

import ToolBar from './ToolBar';
import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import AddIcon from '../ToolButton/assets/add.svg';
import CheckIcon from '../ToolButton/assets/check.svg';
import CheckAllIcon from '../ToolButton/assets/check-all.svg';
import BackIcon from '../ToolButton/assets/back.svg';
import ModeIcon from '../ToolButton/assets/mode.svg';

function Switcher() {
  const [firstLanguage, setFirstLanguage] = useState(true);
  function switchLanguage() {
    setFirstLanguage(!firstLanguage);
  }

  return (
    <LanguageSwitcher
      firstLanguage={firstLanguage}
      LeftText="EN"
      RightText="MA"
      color="#FFFFFF"
      iconType=""
      iconName="swap-horiz"
      onPress={switchLanguage}
      iconSize={24}
    />
  );
}
storiesOf('Tool Bar', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Add', () => (
    <ToolBar
      button={
        <ToolButton onPress={action('clicked-add-button')}>
          <AddIcon width={24} height={24} fill="#FFFFFF" />
        </ToolButton>
      }
    />
  ))
  .add('Switcher', () => <ToolBar button={<Switcher />} />)
  .add('Back', () => (
    <ToolBar
      button={
        <ToolButton onPress={action('clicked-back-button')}>
          <BackIcon width={24} height={24} fill="#FFFFFF" />
        </ToolButton>
      }
    />
  ))
  .add('Check', () => (
    <ToolBar
      button={
        <ToolButton onPress={action('clicked-check-button')}>
          <CheckIcon width={24} height={24} fill="#FFFFFF" />
        </ToolButton>
      }
    />
  ))
  .add('Check all', () => (
    <ToolBar
      button={
        <ToolButton onPress={action('clicked-check-all-button')}>
          <CheckAllIcon width={24} height={24} fill="#FFFFFF" />
        </ToolButton>
      }
    />
  ))
  .add('Mode', () => (
    <ToolBar
      button={
        <ToolButton onPress={action('clicked-add-button')}>
          <ModeIcon width={24} height={24} fill="#FFFFFF" />
        </ToolButton>
      }
    />
  ));
