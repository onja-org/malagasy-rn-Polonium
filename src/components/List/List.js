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
}) {
  return (
    <SafeAreaView>
      <View style={styles.list}>
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
