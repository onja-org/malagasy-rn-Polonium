import {combineReducers} from 'redux';
// import all of constat case name for the swich
// in reducers
import {
  SET_CATEGORIES,
  SET_PHRASES,
  SET_LANGUAGE_NAME,
  SET_CURRENT_CATEGORY,
  SET_NEW_TERMS,
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
// new terms reducer

function newTerms(state = [], action) {
  switch (action.type) {
    case SET_NEW_TERMS:
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
  newTerms,
});
