
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Textarea from './Textarea';
function Edit() {
  const [text, setText] = React.useState('');
  return (
    <Textarea
      phrase={text}
      editable={true}
      onChange={input => setText(input)}
      placeholder={"Enter here"}
    />
  );
}
storiesOf('Textarea', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Textarea phrase', () => <Textarea editable={false} phrase={"Roa ambin’ny folo"}/>)
  .add('Textarea large phrase', () => <Textarea editable={false} phrase={"Roa ambin’ny folo ambin'ny zato sy arivo sy dimy alina sy telo hetsy"}/>)
  .add('Textarea input', () => <Edit />)