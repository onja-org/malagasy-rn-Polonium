import React, { useEffect } from 'react';
import { action } from '@storybook/addon-actions';
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
  nativeLanguage, 
  seenPhrases,
  //actions
  setCategories,
  setCurrentCategory,
  setPhrases,
  newTerms,
  setLanguageName,
  synchronizeStorageToRedux,
}) => {
  useEffect(() => {
    // fetch categories
    const categories = getAllCategories();
    setCategories(categories);
    synchronizeStorageToRedux()
  }, []);

  const openCategoryPhrases = item => {
    setCurrentCategory(item.id);
    // fetch Phrases for category
    const categoryId = item.id;
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
  const openSeenPhrases = (item) => {
    if (seenPhrases.length > 0) {
      setCurrentCategory(item.id);
      setPhrases(seenPhrases); 
      navigation.navigate('Learn');
    }
  }

  const learnButtonText = LANG_DATA[LEARN_BUTTON_TEXT][nativeLanguage];
  const selectCategoryHeading =
    LANG_DATA[SELECT_CATEGORY_HEADING][nativeLanguage];
  const seenPhrasesHeading = LANG_DATA[SEEN_PHRASES_HEADING][nativeLanguage];
  const learntPhrasesHeading =
    LANG_DATA[LEARNT_PHRASES_HEADING][nativeLanguage];

  // Number of the phrases in the seen phrases section
  function seenPhrasesTotal() {
    if (seenPhrases.length === 0) {
      return 'No phrase'
    } else if (seenPhrases.length === 1) {
      return `${seenPhrases.length} word and a phrase.`
    }else {
      return `${seenPhrases.length} words and phrases`
    } 
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={{ paddingHorizontal: 35, paddingVertical: 23 }}>

          <View style={styles.header}>
            <ToolBar
              button={
                <ToolButton
                  onPress={() => {
                    navigation.navigate('Add');
                  }}>
                  <AddIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <LanguageSwitcher
                  firstLanguage={LANGUAGE_NAMES.EN}
                  LeftText={nativeLanguage === LANGUAGE_NAMES.EN ? 'MG' : 'EN'}
                  RightText={nativeLanguage === LANGUAGE_NAMES.EN ? 'EN' : 'MG'}
                  color="#FFFFFF"
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
                  <CheckIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <CheckAllIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <ModeIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
          </View>
          <View style={styles.heading}>
            <SectionHeading text={selectCategoryHeading} />
          </View>
          <List
            lang={nativeLanguage}
            data={categories}
            text={learnButtonText}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={openCategoryPhrases}
          />
          <View style={styles.heading}>
            <SectionHeading text={seenPhrasesHeading} />
          </View>
          <List
            data={[{ id: "###seenPhrases###", name: seenPhrasesTotal() }]}
            text={learnButtonText}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={openSeenPhrases}
          />
          <View style={styles.heading}>
            <SectionHeading text={learntPhrasesHeading} />
          </View>
          <List
            data={[{ id: 2, name: '10 words and phrases' }]}
            text={learnButtonText}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={() => { }}
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
  },
})
