import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import {View} from 'react-native';
import LanguageSwitcher from './LanguageSwitcher';

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

storiesOf('Language Switcher', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Switcher button', () => <Switcher />);
