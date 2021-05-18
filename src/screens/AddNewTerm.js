import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import DropDownPicker from 'react-native-custom-dropdown';
import {LANGUAGE_NAMES} from '../data/dataUtils';
import {
  LANG_DATA,
  CATEGORY_HEADING,
  ENGLISH_PHRASE_HEADING,
  MALAGASY_PHRASE_HEADING,
  PLACEHOLDER_NEW_TERM,
  ADD_BUTTON_TEXT,
} from '../translations';

import ToolBar from '../components/ToolBar/ToolBar';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import BackIcon from '../components/ToolButton/assets/back.svg';
import ModeIcon from '../components/ToolButton/assets/mode.svg';
import AddButton from '../components/NextButton/NextButton';

import SectionHeading from '../components/SectionHeading/SectionHeading';
import Textarea from '../components/Textarea/Textarea';

export default ({
  //nav provider
  navigation,
  categories,
  setLanguageName,
  nativeLanguage,
}) => {
  const [englishPhrase, setEnglishPhrase] = useState('');
  const [malagasyPhrase, setMalagasyPhrase] = useState('');
  const [openCategoriesList, setOpenCategoriesList] = useState(false);

  const categoryHeading = LANG_DATA[CATEGORY_HEADING][nativeLanguage];
  const englishPhraseHeading =
    LANG_DATA[ENGLISH_PHRASE_HEADING][nativeLanguage];
  const malagasyPhraseHeading =
    LANG_DATA[MALAGASY_PHRASE_HEADING][nativeLanguage];
  const placeholderNewTerm = LANG_DATA[PLACEHOLDER_NEW_TERM][nativeLanguage];
  const addButtonText = LANG_DATA[ADD_BUTTON_TEXT][nativeLanguage];

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={{paddingHorizontal: 35, paddingVertical: 23}}>
          <View style={styles.header}>
            <ToolBar
              button={
                <ToolButton
                  onPress={() => {
                    navigation.navigate('Home');
                  }}>
                  <BackIcon width={24} height={24} fill="#FFFFFF" />
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
                <ToolButton onPress={() => {}}>
                  <ModeIcon width={24} height={24} fill="#FFFFFF" />
                </ToolButton>
              }
            />
          </View>
          <View style={styles.heading}>
            <SectionHeading text={categoryHeading} />
            <View onPress={() => setOpenCategoriesList(true)}>
              <Text>Select a category</Text>
            </View>
          </View>
          <View style={styles.heading}>
            <SectionHeading text={englishPhraseHeading} />
          </View>
          <View style={{marginBottom: 37}}>
            <Textarea
              phrase={englishPhrase}
              editable={true}
              onChange={text => setEnglishPhrase(text)}
              placeholder={placeholderNewTerm}
            />
          </View>
          <View style={styles.heading}>
            <SectionHeading text={malagasyPhraseHeading} />
          </View>
          <View style={{marginBottom: 37}}>
            <Textarea
              phrase={malagasyPhrase}
              editable={true}
              onChange={text => setMalagasyPhrase(text)}
              placeholder={placeholderNewTerm}
            />
          </View>
          <View style={{marginTop: 45}}>
            <AddButton
              isDisabled={true}
              textColor="#06B6D4"
              text={addButtonText}
              onPress={() => {}}
            />
          </View>
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
});
