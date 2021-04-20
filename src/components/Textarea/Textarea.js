// components/Task.js
import * as React from 'react';
import { SafeAreaView, View, StyleSheet,TextInput } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function Example({phrase,editable,onChange = () => null, placeholder}) {

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={editable ? styles.input : styles.textarea}
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
    color: '#111827',
    maxWidth: 360,
    marginHorizontal: 'auto',
    fontSize: 20,
    lineHeight: 24.3,
  },

})