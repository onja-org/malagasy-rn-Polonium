import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {LANGUAGE_NAMES} from '../data/dataUtils';
import {
  LANG_DATA,
  CATEGORY_HEADING,
  ENGLISH_PHRASE_HEADING,
  MALAGASY_PHRASE_HEADING,
  PLACEHOLDER_NEW_TERM,
  ADD_BUTTON_TEXT,
  SELECT_CATEGORY_HEADING,
  CLOSE_BUTTON_TEXT,
} from '../translations';
import {CUSTOM_THEMES} from '../redux/theme';

import {generateId} from '../utils';

import ToolBar from '../components/ToolBar/ToolBar';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import BackIcon from '../components/ToolButton/assets/back.svg';
import ModeIcon from '../components/ToolButton/assets/mode.svg';
import AddButton from '../components/NextButton/NextButton';
import TriangleDownIcon from '../components/ToolButton/assets/triangle-down.svg';

import SectionHeading from '../components/SectionHeading/SectionHeading';
import Textarea from '../components/Textarea/Textarea';
import List from '../components/List/List';

export default ({
  //nav provider
  navigation,
  categories,
  setLanguageName,
  nativeLanguage,
  addNewTerm,
  themeMode,
  switchTheme,
}) => {
  const {colors} = themeMode;

  const [englishPhrase, setEnglishPhrase] = useState('');
  const [malagasyPhrase, setMalagasyPhrase] = useState('');
  const [openCategoriesList, setOpenCategoriesList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [categoryId, setCategoryId] = useState('');
  const disableAddButton =
    englishPhrase.length < 1 ||
    malagasyPhrase.length < 1 ||
    categoryId.length < 1;

  const categoryHeading = LANG_DATA[CATEGORY_HEADING][nativeLanguage];
  const englishPhraseHeading =
    LANG_DATA[ENGLISH_PHRASE_HEADING][nativeLanguage];
  const malagasyPhraseHeading =
    LANG_DATA[MALAGASY_PHRASE_HEADING][nativeLanguage];
  const placeholderNewTerm = LANG_DATA[PLACEHOLDER_NEW_TERM][nativeLanguage];
  const addButtonText = LANG_DATA[ADD_BUTTON_TEXT][nativeLanguage];
  const selectCategoryHeading =
    LANG_DATA[SELECT_CATEGORY_HEADING][nativeLanguage];
  const closeButtonText = LANG_DATA[CLOSE_BUTTON_TEXT][nativeLanguage];

  const selectCategory = category => {
    setSelectedCategory(category);
    setCategoryId(category?.id);
    setOpenCategoriesList(false);
  };

  const addNewTermToCategory = () => {
    const newTerm = {
      catId: categoryId,
      id: generateId(),
      name: {
        en: englishPhrase,
        mg: malagasyPhrase,
      },
    };
    addNewTerm(newTerm);
    setEnglishPhrase('');
    setMalagasyPhrase('');
    setSelectedCategory({});
    setCategoryId('');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={{paddingHorizontal: 35, paddingVertical: 23}}>
          <View style={styles.header}>
            <ToolBar
              button={
                <ToolButton
                  onPress={() => {
                    navigation.navigate('Home');
                  }}>
                  <BackIcon width={24} height={24} fill={colors.iconFill} />
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
                <ToolButton onPress={switchTheme}>
                  <ModeIcon width={24} height={24} fill={colors.iconFill} />
                </ToolButton>
              }
            />
          </View>
          <View style={styles.heading}>
            <SectionHeading textColor={colors.text} text={categoryHeading} />
            <TouchableOpacity
              style={styles.select}
              onPress={() => setOpenCategoriesList(true)}>
              <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={styles.labelSelect}>
                {!selectedCategory?.name
                  ? selectCategoryHeading
                  : selectedCategory?.name[nativeLanguage]}
              </Text>
              <View style={{marginLeft: 5, marginTop: 2}}>
                <TriangleDownIcon width={11} height={11} />
              </View>
            </TouchableOpacity>
            {openCategoriesList && (
              <View
                style={[
                  styles.dropdownSelect,
                  {backgroundColor: colors.backgroundColor},
                ]}>
                <List
                  data={categories}
                  lang={nativeLanguage}
                  makeAction={selectCategory}
                  backgroundColor={colors.backgroundColor}
                  textColor={colors.text}
                  border={colors.border}
                />
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setOpenCategoriesList(false)}>
                  <Text
                    style={[styles.closeButtonText, {color: colors.iconFill}]}>
                    {closeButtonText}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <KeyboardAwareScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View style={styles.heading}>
                <SectionHeading
                  textColor={colors.text}
                  text={englishPhraseHeading}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View style={{marginBottom: 37}}>
                <Textarea
                  phrase={englishPhrase}
                  editable={true}
                  onChange={text => setEnglishPhrase(text)}
                  placeholder={placeholderNewTerm}
                  backgroundColor={colors.backgroundColor}
                  textColor={colors.text}
                  border={colors.border}
                />
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View style={styles.heading}>
                <SectionHeading
                  textColor={colors.text}
                  text={malagasyPhraseHeading}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View style={{marginBottom: 37}}>
                <Textarea
                  phrase={malagasyPhrase}
                  editable={true}
                  onChange={text => setMalagasyPhrase(text)}
                  placeholder={placeholderNewTerm}
                  backgroundColor={colors.backgroundColor}
                  textColor={colors.text}
                  border={colors.border}
                />
              </View>
            </TouchableWithoutFeedback>

            <View style={{marginTop: 45}}>
              <AddButton
                isDisabled={disableAddButton}
                textColor={disableAddButton ? '#06B6D4' : colors.iconFill}
                text={addButtonText}
                onPress={addNewTermToCategory}
              />
            </View>
          </KeyboardAwareScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  labelSelect: {
    fontWeight: '600',
    fontSize: 18,
    color: '#06B6D4',
    maxWidth: 255,
  },
  dropdownSelect: {
    zIndex: 3,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: '100%',
    top: 32,
    padding: 16,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#D4068E',
  },
  closeButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  },
});
