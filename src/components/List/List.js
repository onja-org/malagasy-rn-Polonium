import React from 'react';
import ListItem from '../ListItem/ListItem';
import {View, SafeAreaView, StyleSheet} from 'react-native';

export default function List({
  data,
  text,
  iconName,
  iconType,
  color,
  makeAction,
  lang,
  randomPhraseId,
  disableAllOptions,
  backgroundColor,
  textColor,
  border,
}) {
  return (
    <SafeAreaView>
      <View
        style={[
          styles.list,
          {
            backgroundColor: backgroundColor ? backgroundColor : '#FFFFFF',
            borderColor: border ? border : '#E5E5E5',
          },
        ]}>
        <ListItem
          lang={lang}
          data={data}
          text={text}
          color={color}
          iconType={iconType}
          iconName={iconName}
          makeAction={makeAction}
          randomPhraseId={randomPhraseId}
          disableAllOptions={disableAllOptions}
          textColor={textColor}
          border={border}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    maxHeight: 370,
    marginBottom: 15,
  },
});
