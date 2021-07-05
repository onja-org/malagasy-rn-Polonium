import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  SectionList,
} from 'react-native';

import {LANG_DATA, ANSWER_CORRECT, ANSWER_WRONG} from '../../translations';

export const Separator = ({border}) => (
  <View
    style={[styles.separator, {backgroundColor: border ? border : '#E5E5E5'}]}
  />
);
const RenderDataItem = ({
  item,
  index,
  makeAction,
  text,
  iconName,
  iconType,
  color,
  lang,
  randomPhraseId,
  disableAllOptions,
  textColor,
}) => {
  const showAnswerMode = disableAllOptions === true;
  const isCorrectAnswer = item.id === randomPhraseId;
  const isSelected = Boolean(item?.isSelected);
  const showAsCorrect = showAnswerMode && isCorrectAnswer;
  const shouldReveal = isSelected || showAsCorrect;
  const shouldDisplayAnswer = showAnswerMode && shouldReveal;

  const answerCorrectText = LANG_DATA[ANSWER_CORRECT][lang];
  const answerWrongText = LANG_DATA[ANSWER_WRONG][lang];

  const textToDisplay = !shouldDisplayAnswer
    ? text
    : showAsCorrect
    ? answerCorrectText
    : answerWrongText;

  const colorToDisplay = !shouldDisplayAnswer
    ? color
    : showAsCorrect
    ? '#06D440'
    : '#D4068E';

  const iconTypeToDisplay = !shouldDisplayAnswer
    ? iconType
    : showAsCorrect
    ? 'octicon'
    : '';

  const IconNameToDisplay = !shouldDisplayAnswer
    ? iconName
    : showAsCorrect
    ? 'check'
    : 'close';

  return (
    <TouchableOpacity
      disabled={disableAllOptions && disableAllOptions}
      style={styles.item}
      onPress={() => makeAction(item, index)}>
      <View>
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={[styles.text, {color: textColor ? textColor : '#111827'}]}>
          {lang ? item?.name?.[lang] : item.name}
        </Text>
      </View>
      <ActionButton
        text={textToDisplay}
        color={colorToDisplay}
        iconType={iconTypeToDisplay}
        iconName={IconNameToDisplay}
      />
    </TouchableOpacity>
  );
};

export default function ListItem({
  makeAction,
  data,
  text,
  iconName,
  iconType,
  color,
  lang,
  randomPhraseId,
  disableAllOptions,
  textColor,
  border,
}) {
  return (
    <SafeAreaView>
      <SectionList
        sections={[{data: data}]}
        renderItem={({item, index}) => (
          <RenderDataItem
            item={item}
            index={index}
            makeAction={makeAction}
            text={text}
            iconName={iconName}
            iconType={iconType}
            color={color}
            lang={lang}
            randomPhraseId={randomPhraseId}
            disableAllOptions={disableAllOptions}
            textColor={textColor}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Separator border={border} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
    paddingLeft: 16,
    paddingRight: 20,
    paddingVertical: 17,
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
    maxWidth: 249,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
});
