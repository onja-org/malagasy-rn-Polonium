import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import SectionHeading from './SectionHeading';

storiesOf('Section Heading', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Select', () => <SectionHeading text={'Select a category:'} />)
  .add('Seen', () => <SectionHeading text={'Seen phrases:'} />)
  .add('Learnt', () => <SectionHeading text={'Learnt phrases:'} />)
  .add('Category', () => <SectionHeading text={'Category:'} />)
  .add('Phrase', () => <SectionHeading text={'The phrase:'} />)
  .add('Pick', () => <SectionHeading text={'Pick a solution:'} />)
  .add('English phrase', () => (
    <SectionHeading text={'The phrase in English: '} />
  ))
  .add('Malagasy phrase', () => (
    <SectionHeading text={'The phrase in Malagasy: '} />
  ));
