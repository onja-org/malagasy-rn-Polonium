import AsyncStorage from '@react-native-async-storage/async-storage';
export const NEW_TERMS_KEY = '@malagasyApp/newTermsKey';
export const SEEN_PHRASES_KEY = '@SEEN_PHRASES_KEY';

export const setDataToStorage = async (storageKey, phrase) => {
  try {
    const jsonValue = JSON.stringify(phrase);
    return await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    alert(e);
  }
};
export const getDataFromStorage = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return JSON.parse(jsonValue);
  } catch (error) {
    alert(error);
  }
};
