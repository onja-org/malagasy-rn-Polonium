import AsyncStorage from '@react-native-community/async-storage';
export const LEARNT_PHRASES_KEY = '@malagasyApp//learntPhrases';
export const NEW_TERMS_KEY = '@malagasyApp/newTermsKey';
export const SEEN_PHRASES_KEY = '@SEEN_PHRASES_KEY';
 
export async function setDataToStorage(storageKey, value) {
  try {
    const jsonValue = JSON.stringify(value);
    return await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (error) {
    alert(error);
  }
}

export async function getDataFromStorage(storagekey) {
  try {
    const jsonValue = await AsyncStorage.getItem(storagekey);
    return JSON.parse(jsonValue);
  } catch (error) {
    alert(error);
  }
}