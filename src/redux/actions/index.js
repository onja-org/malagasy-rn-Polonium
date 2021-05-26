import {getData, NEW_TERMS_KEY, storeData} from '../../utils/storage';
// // import all of the constants from contants folder
import {
  SET_CATEGORIES,
  SET_PHRASES,
  SET_LANGUAGE_NAME,
  SET_CURRENT_CATEGORY,
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

export function setNewTerms(newTerms) {
  return {
    type: SET_NEW_TERMS,
    payload: newTerms,
  };
}

export function addNewTerm(newTerm) {
  return async dispatch => {
    const storedNewTerms = await getData(NEW_TERMS_KEY);

    let newTermsToStore = null;
    if (!storedNewTerms) {
      newTermsToStore = [newTerm];
    } else {
      newTermsToStore = [...storedNewTerms, newTerm];
    }
    await storeData(NEW_TERMS_KEY, newTermsToStore);
    dispatch(setNewTerms(newTermsToStore));

    return Promise.resolve();
  };
}

export function synchronizeStorageToRedux() {
  return async dispatch => {
    const storedNewTerms = await getData(NEW_TERMS_KEY);
    if (!storedNewTerms) {
      return Promise.resolve();
    }
    dispatch(setNewTerms(storedNewTerms));
    return Promise.resolve();
  };
}
