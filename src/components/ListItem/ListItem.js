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

export const Separator = () => <View style={styles.separator} />;
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
}) => {
  const showAnswerMode = disableAllOptions === true;
  const isCorrectAnswer = item.id === randomPhraseId;
  const isSelected = Boolean(item?.isSelected);
  const showAsCorrect = showAnswerMode && isCorrectAnswer;
  const shouldReveal = isSelected || showAsCorrect;
  const shouldDisplayAnswer = showAnswerMode && shouldReveal;

  const textToDisplay = !shouldDisplayAnswer
    ? text
    : showAsCorrect
    ? lang === 'en'
      ? 'Correct'
      : 'Marina'
    : lang === 'en'
    ? 'Wrong'
    : 'Diso';

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
        <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.text}>
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
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Separator />}
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
    maxWidth: 320,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
});
