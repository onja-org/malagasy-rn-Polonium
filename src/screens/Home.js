import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {action} from '@storybook/addon-actions';
import {
  LANGUAGE_NAMES,
  getPhrasesForCategoryId,
  getAllCategories,
} from '../data/dataUtils';
import {SET_LANGUAGE_NAME} from '../redux/constants';

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
  //actions
  setCategories,
  setCurrentCategory,
  setPhrases,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch categories
    const categories = getAllCategories();
    setCategories(categories);
  }, []);

  const openCategoryPhrases = item => {
    setCurrentCategory(item.id);
    // fetch Phrases for category
    const phrasesForCategory = getPhrasesForCategoryId(item.id);
    setPhrases(phrasesForCategory);
    navigation.navigate('Learn');
  };

  function switchNativeLanguage() {
    dispatch({
      type: SET_LANGUAGE_NAME,
      payload:
        nativeLanguage === LANGUAGE_NAMES.EN
          ? LANGUAGE_NAMES.MG
          : LANGUAGE_NAMES.EN,
    });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={{paddingHorizontal: 35, paddingVertical: 23}}>
          <View style={styles.header}>
            <ToolBar
              button={
                <ToolButton onPress={action('clicked-add-button')}>
                  <AddIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
            <ToolBar
              button={
                <LanguageSwitcher
                  firstLanguage={nativeLanguage}
                  LeftText="EN"
                  RightText="MA"
                  color="#FFFFFF"
                  iconType=""
                  iconName="swap-horiz"
                  onPress={switchNativeLanguage}
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
            <SectionHeading
              text={
                nativeLanguage === LANGUAGE_NAMES.EN
                  ? 'Select a category:'
                  : 'Misafidiana sokajy:'
              }
            />
          </View>
          <List
            lang={nativeLanguage}
            data={categories}
            text={nativeLanguage === LANGUAGE_NAMES.EN ? 'Learn' : 'Ianarana'}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={openCategoryPhrases}
          />
          <View style={styles.heading}>
            <SectionHeading
              text={
                nativeLanguage === LANGUAGE_NAMES.EN
                  ? 'Seen phrases:'
                  : 'Andian-teny hita:'
              }
            />
          </View>
          <List
            data={[{id: 1, name: '35 words and phrases'}]}
            text={nativeLanguage === LANGUAGE_NAMES.EN ? 'Learn' : 'Ianarana'}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={() => {}}
          />
          <View style={styles.heading}>
            <SectionHeading
              text={
                nativeLanguage === LANGUAGE_NAMES.EN
                  ? 'Learnt phrases:'
                  : 'Andian-teny nianarana:'
              }
            />
          </View>
          <List
            data={[{id: 2, name: '10 words and phrases'}]}
            text={nativeLanguage === LANGUAGE_NAMES.EN ? 'Learn' : 'Ianarana'}
            color="#06B6D4"
            iconType="material-community"
            iconName="arrow-right"
            makeAction={() => {}}
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
});
