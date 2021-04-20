import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

export default function LanguageSwitcher({
  onPress,
  color,
  iconType,
  iconName,
  LeftText,
  RightText,
  iconSize,
  firstLanguage,
}) {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor={firstLanguage ? '#001F7E' : '#007E3A'}
      onPress={onPress}>
      <View style={styles.button}>
        <Text style={(styles.text, {color: color})}>
          {firstLanguage ? RightText : LeftText}
        </Text>
        <Icon
          style={{paddingHorizontal: 5}}
          name={iconName}
          color={color}
          type={iconType}
          size={iconSize}
        />
        <Text style={(styles.text, {color: color})}>
          {firstLanguage ? LeftText : RightText}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

LanguageSwitcher.defaultProps = {
  onPress: () => {},
};

LanguageSwitcher.propTypes = {
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 11,
    borderRadius: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 16,
  },
});
