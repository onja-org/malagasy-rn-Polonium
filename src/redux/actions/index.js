 // import all of the constants from contants folder
import {
  SET_CATEGORIES,
  SET_PHRASES,
  SET_LANGUAGE_NAME,
  SET_CURRENT_CATEGORY,
  SET_LEARNT_PHRASES,
} from '../constants';
import {
  LEARNT_PHRASES_KEY,
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
    return Promise.resolve();
  };
}
