import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default function SectionHeading({text, textColor}) {
  return (
    <SafeAreaView>
      <Text
        h2
        style={[styles.Heading, {color: textColor ? textColor : '#111827'}]}>
        {text}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Heading: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
});
