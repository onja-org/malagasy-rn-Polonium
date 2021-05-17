// // import all of the constants from contants folder
import {
  SET_CATEGORIES,
  SET_PHRASES,
  SET_LANGUAGE_NAME,
  SET_CURRENT_CATEGORY,
  SET_LEARNT_PHRASES,
  SET_NEW_TERMS,
} from '../constants';
import {
  LEARNT_PHRASES_KEY,
  NEW_TERMS_KEY,
  setDataToStorage,
  getDataFromStorage,
} from '../../utils/storage';

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

export function setLearntPhrases(phrase) {
  return {
    type: SET_LEARNT_PHRASES,
    payload: phrase,
  };
}

export function addLearntPhrases(phrase) {
  return async dispatch => {
    const storedLearntPhrases = await getDataFromStorage(LEARNT_PHRASES_KEY);
    let itemsToStore = null;

    if (!storedLearntPhrases) {
      itemsToStore = [phrase];
    } else {
      itemsToStore = [...storedLearntPhrases, phrase];
    }

    await setDataToStorage(LEARNT_PHRASES_KEY, itemsToStore);

    dispatch(setLearntPhrases(itemsToStore));
    return Promise.resolve();
  };
}

// Updating learntPhrases after moving the incorrect anwers to seen phrases
export function removeWrongAswerFromLearntPhrases(phrase) {
  return async dispatch => {
    const storedLearntPhrases = await getDataFromStorage(LEARNT_PHRASES_KEY);
    const learntPhrasesWithoutWrongAnswer = storedLearntPhrases.filter(
      learntPhrase => learntPhrase.id !== phrase.id,
    );
    await setDataToStorage(LEARNT_PHRASES_KEY, learntPhrasesWithoutWrongAnswer);
    dispatch(setLearntPhrases(learntPhrasesWithoutWrongAnswer));
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
    const storedLearntPhrases = await getDataFromStorage(LEARNT_PHRASES_KEY);

    if (!storedLearntPhrases) {
      return Promise.resolve();
    }

    dispatch(setLearntPhrases(storedLearntPhrases));
    const storedNewTerms = await setDataToStorage(NEW_TERMS_KEY);
    if (!storedNewTerms) {
      return Promise.resolve();
    }
    dispatch(setNewTerms(storedNewTerms));
    return Promise.resolve();
  };
}
