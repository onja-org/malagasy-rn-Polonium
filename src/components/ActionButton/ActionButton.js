import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

export default function ActionButton({
  onPress,
  text,
  color,
  iconType,
  iconName,
}) {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="transparent"
      onRowPress={onPress}>
      <View style={styles.button}>
        <Text style={(styles.text, {color: color})}>{text}</Text>
        <Icon
          style={{marginLeft: 10}}
          name={iconName}
          type={iconType}
          color={color}
        />
      </View>
    </TouchableHighlight>
  );
}

ActionButton.defaultProps = {
  onPress: () => {},
};

ActionButton.propTypes = {
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
  },
  text: {
    color: '#06B6D4',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
  },
});
