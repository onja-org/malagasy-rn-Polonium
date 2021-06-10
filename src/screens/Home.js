import React, {useEffect} from 'react';
import {action} from '@storybook/addon-actions';
import {
  LANGUAGE_NAMES,
  getPhrasesForCategoryId,
  getAllCategories,
} from '../data/dataUtils';
import {
  LANG_DATA,
  LEARN_BUTTON_TEXT,
  SELECT_CATEGORY_HEADING,
  SEEN_PHRASES_HEADING,
  LEARNT_PHRASES_HEADING,
  NO_SEEN_AND_LEARNT_PHRASES_TEXT,
  SINGLE_PHRASE_TEXT,
  MULTIPLE_PHRASES_TEXT,
} from '../translations';

import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import List from '../components/List/List';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ToolBar from '../components/ToolBar/ToolBar';

import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import AddIcon from '../components/ToolButton/assets/add.svg';
import CheckIcon from '../components/ToolButton/assets/check.svg';
import CheckAllIcon from '../components/ToolButton/assets/check-all.svg';
import ModeIcon from '../components/ToolButton/assets/mode.svg';

export default ({
  //nav provider
  navigation,
  //state props
  categories,
  learntPhrases,
  nativeLanguage,
  seenPhrases,
  //actions
  setCategories,
  setCurrentCategory,
  setPhrases,
  newTerms,
  setLanguageName,
  synchronizeStorageToRedux,
  themeMode,
  switchTheme,
}) => {
  const {colors} = themeMode;

  useEffect(() => {
    // fetch categories
    synchronizeStorageToRedux();
    const categories = getAllCategories();
    setCategories(categories);
    synchronizeStorageToRedux();
  }, []);

  const openCategoryPhrases = item => {
    const categoryId = item.id;
    setCurrentCategory(categoryId);
    // fetch Phrases for category
    const phrasesForCategory = getPhrasesForCategoryId(categoryId);
    const newTermsForCategory = newTerms.filter(
      phrase => phrase.catId === categoryId,
    );
    const combinedPhrasesForCategory = [
      ...phrasesForCategory,
      ...newTermsForCategory,
    ];
    setPhrases(combinedPhrasesForCategory);
    navigation.navigate('Learn');
  };

  //Checks phrases in the seen phrases section
  const openSeenPhrases = item => {
    if (seenPhrases.length > 0) {
      setCurrentCategory(item.id);
      setPhrases(seenPhrases);
      navigation.navigate('Learn');
    }
  };

  const learnButtonText = LANG_DATA[LEARN_BUTTON_TEXT][nativeLanguage];
  const selectCategoryHeading =
    LANG_DATA[SELECT_CATEGORY_HEADING][nativeLanguage];
  const seenPhrasesHeading = LANG_DATA[SEEN_PHRASES_HEADING][nativeLanguage];
  const learntPhrasesHeading =
    LANG_DATA[LEARNT_PHRASES_HEADING][nativeLanguage];
  const noSeenAndLearntPharasesText =
    LANG_DATA[NO_SEEN_AND_LEARNT_PHRASES_TEXT][nativeLanguage];
  const singlePharaseText = LANG_DATA[SINGLE_PHRASE_TEXT][nativeLanguage];
  const multiplePharasesText = LANG_DATA[MULTIPLE_PHRASES_TEXT][nativeLanguage];

  const openLearntPhrases = item => {
    if (learntPhrases.length > 0) {
      setCurrentCategory(item.id);
      setPhrases(learntPhrases);
      navigation.navigate('Learn');
    }
  };

  const openSeenPhrasesByButton = () => {
    openSeenPhrases({
      id: '###seenPhrases###',
    });
  };

  const setLearntPhrasesRowText = () => {
    const numberOfPhrases = learntPhrases.length;
    if (numberOfPhrases === 0) {
      return noSeenAndLearntPharasesText;
    } else if (numberOfPhrases === 1) {
      return nativeLanguage === LANGUAGE_NAMES.EN
        ? `${numberOfPhrases} ${singlePharaseText}`
        : `${singlePharaseText} ${numberOfPhrases}`;
    } else {
      return nativeLanguage === LANGUAGE_NAMES.EN
        ? `${numberOfPhrases} ${multiplePharasesText}`
        : `${multiplePharasesText} ${numberOfPhrases}`;
    }
  };

  // Number of the phrases in the seen phrases section
  function seenPhrasesTotal() {
    if (seenPhrases.length === 0) {
      return noSeenAndLearntPharasesText;
    } else if (seenPhrases.length === 1) {
      return nativeLanguage === LANGUAGE_NAMES.EN
        ? `${seenPhrases.length} ${singlePharaseText}`
        : `${singlePharaseText} ${seenPhrases.length}`;
    } else {
      return nativeLanguage === LANGUAGE_NAMES.EN
        ? `${seenPhrases.length} ${multiplePharasesText}`
        : `${multiplePharasesText} ${seenPhrases.length}`;
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior="padding">
        <View
          style={{
            paddingHorizontal: 35,
            paddingVertical: 23,
          }}>
          <View style={styles.header}>
            <ToolBar
              button={
                <ToolButton
                  onPress={() => {
                    navigation.navigate('Add');
                  }}>
                  <AddIcon width={24} height={24} fill={colors.iconFill} />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <LanguageSwitcher
                  firstLanguage={LANGUAGE_NAMES.EN}
                  LeftText={nativeLanguage === LANGUAGE_NAMES.EN ? 'MG' : 'EN'}
                  RightText={nativeLanguage === LANGUAGE_NAMES.EN ? 'EN' : 'MG'}
                  color={colors.iconFill}
                  iconType=""
                  iconName="swap-horiz"
                  onPress={() =>
                    setLanguageName(
                      nativeLanguage === LANGUAGE_NAMES.EN
                        ? LANGUAGE_NAMES.MG
                        : LANGUAGE_NAMES.EN,
                    )
                  }
                  iconSize={24}
                />
              }
            />
            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <CheckIcon width={24} height={24} fill={colors.iconFill} />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <CheckAllIcon width={24} height={24} fill={colors.iconFill} />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <ToolButton onPress={switchTheme}>
                  <ModeIcon width={24} height={24} fill={colors.iconFill} />
                </ToolButton>
              }
            />
          </View>
          <View style={styles.heading}>
            <SectionHeading
              textColor={colors.text}
              text={selectCategoryHeading}
            />
          </View>
          <List
            lang={nativeLanguage}
            data={categories}
            text={learnButtonText}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={openCategoryPhrases}
            backgroundColor={colors.backgroundColor}
            textColor={colors.text}
            border={colors.border}
          />
          <View style={styles.heading}>
            <SectionHeading textColor={colors.text} text={seenPhrasesHeading} />
          </View>
          <List
            data={[{id: '###seenPhrases###', name: seenPhrasesTotal()}]}
            text={learnButtonText}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={openSeenPhrases}
            backgroundColor={colors.backgroundColor}
            textColor={colors.text}
            border={colors.border}
          />
          <View style={styles.heading}>
            <SectionHeading
              textColor={colors.text}
              text={learntPhrasesHeading}
            />
          </View>
          <List
            text={learnButtonText}
            data={[
              {
                id: '###learntPhrases###',
                name: setLearntPhrasesRowText(),
              },
            ]}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={openLearntPhrases}
            backgroundColor={colors.backgroundColor}
            textColor={colors.text}
            border={colors.border}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingBottom: 56,
  },
  heading: {
    paddingBottom: 15,
    color: '#FFFFFF',
  },
});
