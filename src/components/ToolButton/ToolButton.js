import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, StyleSheet, View} from 'react-native';

export default function ToolButton({onPress, children}) {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="#E5E5E5"
      onPress={onPress}>
      <View style={styles.button}>{children}</View>
    </TouchableHighlight>
  );
}

ToolButton.defaultProps = {
  children: null,
  onPress: () => {},
};

ToolButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF',
    width: 'auto',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: '#06B6D4',
    alignItems: 'center',
  },
  button: {
    margin: 13,
  },
});
