import {combineReducers} from 'redux';
// import all of constat case name for the swich
// in reducers
import {
  SET_CATEGORIES,
  SET_PHRASES,
  SET_LANGUAGE_NAME,
  SET_CURRENT_CATEGORY,
  SET_LEARNT_PHRASES,
  SHOW_LEARNT_PHRASES,
  REMOVE_WRONG_ANSWERS,
} from '../constants';

// categories reducer
function categories(state = [], action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

// categories reducer
function currentCategoryId(state = '', action) {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}

// phrases reducer
function categoryPhrases(state = [], action) {
  switch (action.type) {
    case SET_PHRASES:
      return action.payload;
    default:
      return state;
  }
}

function nativeLanguage(state = '', action) {
  switch (action.type) {
    case SET_LANGUAGE_NAME:
      return action.payload;
    default:
      return state;
  }
}

// To show learnt phrases
function showLearntPhrases(state = false, action) {
  switch (action.type) {
    case SHOW_LEARNT_PHRASES:
      return action.payload;
    default:
      return state;
  }
}

// Setting learnt phrases
function learntPhrases(state = [], action) {
  switch (action.type) {
    case SET_LEARNT_PHRASES:
      return action.payload;
    default:
      return state;
  }
}

// combine all of the reducers together
export default combineReducers({
  currentCategoryId,
  categories,
  categoryPhrases,
  nativeLanguage,
  showLearntPhrases,
  learntPhrases,
});
