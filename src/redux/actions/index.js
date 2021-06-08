import { setDataToStorage, getDataFromStorage, NEW_TERMS_KEY, SEEN_PHRASES_KEY } from '../../utils/storage';

// // import all of the constants from contants folder
import {
  SET_CATEGORIES,
  SET_PHRASES,
  SET_LANGUAGE_NAME,
  SET_CURRENT_CATEGORY,
  SET_SEEN_PHRASE,
  SET_NEW_TERMS,
} from '../constants';

// categories actions
export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
}

export function setCurrentCategory(categoryId) {
  return {
    type: SET_CURRENT_CATEGORY,
    payload: categoryId,
  };
}

export function setPhrases(phrases) {
  return {
    type: SET_PHRASES,
    payload: phrases,
  };
}

export function setLanguageName(language) {
  return {
    type: SET_LANGUAGE_NAME,
    payload: language,
  };
} 

export function setSeenPhrases(seenPhrases) {
  return {
    type: SET_SEEN_PHRASE,
    payload: seenPhrases,
  }
}

export function addSeenPhrase(phrase) {
  return async dispatch => {
    const storedSeenPhrases = await getDataFromStorage(SEEN_PHRASES_KEY);
    let itemsToStore = null;
    if (!storedSeenPhrases) {
      itemsToStore = [phrase];
    } else {
      itemsToStore = [...storedSeenPhrases, phrase];
    }
    await setDataToStorage(SEEN_PHRASES_KEY, itemsToStore);
    dispatch(setSeenPhrases(itemsToStore));
    return Promise.resolve();
  };
}

export function removeFromSeenPhrases(seenPhrase) {
  return async dispatch => {
    const storedSeenPhrases = await getDataFromStorage(SEEN_PHRASES_KEY);
    let itemsToStore = storedSeenPhrases.filter(
      phrase => phrase.id !== seenPhrase.id,
    );
    await setDataToStorage(SEEN_PHRASES_KEY, itemsToStore);
    dispatch(setSeenPhrases(itemsToStore));
    return Promise.resolve();
  };
}

export function setNewTerms(newTerms) {
  return {
    type: SET_NEW_TERMS,
    payload: newTerms,
  };
}

export function addNewTerm(newTerm) {
  return async dispatch => {
    const storedNewTerms = await getDataFromStorage(NEW_TERMS_KEY);
    let newTermsToStore = null;
    if (!storedNewTerms) {
      newTermsToStore = [newTerm];
    } else {
      newTermsToStore = [...storedNewTerms, newTerm];
    }
    await setDataToStorage(NEW_TERMS_KEY, newTermsToStore);
    dispatch(setNewTerms(newTermsToStore));

    return Promise.resolve();
  };
}

export function synchronizeStorageToRedux() {
  return async dispatch => {
    const storedNewTerms = await getDataFromStorage(NEW_TERMS_KEY);
    if (storedNewTerms) {
      dispatch(setNewTerms(storedNewTerms));
    }
    
    const storedSeenPhrases = await getDataFromStorage(SEEN_PHRASES_KEY);
    if (storedSeenPhrases) {
      dispatch(setSeenPhrases(storedSeenPhrases));
    }
   
    return Promise.resolve();
  };
}

