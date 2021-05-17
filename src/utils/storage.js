import AsyncStorage from '@react-native-community/async-storage';
export const NEW_TERMS_KEY = '@malagasyApp/newTermsKey';
export const LEARNT_PHRASES_KEY = '@malagasyApp//learntPhrases';

export async function setDataToStorage(storageKey, value) {
  try {
    const jsonValue = JSON.stringify(value);
    return await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    alert(e);
  }
}

export async function getDataFromStorage(storagekey) {
  try {
    const jsonValue = await AsyncStorage.getItem(storagekey);
    return JSON.parse(jsonValue);
  } catch (e) {
    alert(e);
  }
}
