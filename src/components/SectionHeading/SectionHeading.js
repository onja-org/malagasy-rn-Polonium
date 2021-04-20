import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default function SectionHeading({text}) {
  return (
    <SafeAreaView>
      <Text h2 style={styles.Heading}>
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
