// components/Task.js
import * as React from 'react';
import {SafeAreaView, View, StyleSheet, TextInput} from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function Example({
  phrase,
  editable,
  onChange = () => null,
  placeholder,
  backgroundColor,
  textColor,
  border,
}) {
  const defaultTextColor = '#111827';
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor ? backgroundColor : '#fff',
          borderColor: border ? border : '#E5E5E5',
        },
      ]}>
      <TextInput
        placeholderTextColor={
          textColor === defaultTextColor ? 'rgba(17, 24, 39, 0.5)' : textColor
        }
        style={
          editable
            ? [
                styles.input,
                {
                  color: textColor ? textColor : defaultTextColor,
                },
              ]
            : [
                styles.textarea,
                {color: textColor ? textColor : defaultTextColor},
              ]
        }
        value={phrase}
        editable={editable}
        onChangeText={onChange}
        multiline={true}
        placeholder={placeholder}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginVertical: 0,
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  input: {
    color: '#111827',
    lineHeight: 24.3,
  },
  textarea: {
    color: 'white',
    maxWidth: 360,
    marginHorizontal: 'auto',
    fontSize: 20,
    lineHeight: 24.3,
  },
});
