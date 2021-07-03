import {combineReducers} from 'redux';
import {CUSTOM_THEMES} from '../theme';
// import all of constat case name for the swich
// in reducers
import {
  SET_CATEGORIES,
  SET_PHRASES,
  SET_LANGUAGE_NAME,
  SET_CURRENT_CATEGORY,
  SET_LEARNT_PHRASES,
  SET_SEEN_PHRASE,
  SET_NEW_TERMS,
  SWITCH_THEME,
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

// Setting learnt phrases
function learntPhrases(state = [], action) {
  switch (action.type) {
    case SET_LEARNT_PHRASES:
      return action.payload;
    default:
      return state;
  }
}

function seenPhrases(state = [], action) {
  switch (action.type) {
    case SET_SEEN_PHRASE:
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

function themeMode(state = {}, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return state.name === CUSTOM_THEMES.nightMode.name
        ? CUSTOM_THEMES.defaultMode
        : CUSTOM_THEMES.nightMode;
    default:
      return state;
  }
}
// combine all of the reducers together
export default combineReducers({
  currentCategoryId,
  categories,
  categoryPhrases,
  seenPhrases,
  nativeLanguage,
  learntPhrases,
  newTerms,
  themeMode,
});
