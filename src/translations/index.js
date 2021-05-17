import {LANGUAGE_NAMES} from '../data/dataUtils';

export const ANSWER_CORRECT = 'ANSWER_CORRECT';
export const ANSWER_WRONG = 'ANSWER_WRONG';

export const LEARN_BUTTON_TEXT = 'LEARN_BUTTON_TEXT';
export const PICK_BUTTON_TEXT = 'PICK_BUTTON_TEXT';
export const NEXT_BUTTON_TEXT = 'NEXT_BUTTON_TEXT';
export const RESHUFFLE_BUTTON_TEXT = 'RESHUFFLE_BUTTON_TEXT';
export const ADD_BUTTON_TEXT = 'ADD_BUTTON_TEXT';

export const SELECT_CATEGORY_HEADING = 'SELECT_CATEGORY_HEADING';
export const SEEN_PHRASES_HEADING = 'SEEN_PHRASES_HEADING';
export const LEARNT_PHRASES_HEADING = 'LEARNT_PHRASES_HEADING';

export const CATEGORY_HEADING = 'CATEGORY_HEADING';
export const PHRASE_HEADING = 'PHRASE_HEADING';
export const SOLUTION_HEADING = 'SOLUTION_HEADING';

export const SHOULD_RESHUFFLE_TEXTAREA_CONTENT =
  'SHOULD_RESHUFFLE_TEXTAREA_CONTENT';

export const ENGLISH_PHRASE_HEADING = 'ENGLISH_PHRASE_HEADING';
export const MALAGASY_PHRASE_HEADING = 'MALAGASY_PHRASE_HEADING';
export const PLACEHOLDER_NEW_TERM = 'PLACEHOLDER_NEW_TERM';
export const CLOSE_BUTTON_TEXT = 'CLOSE_BUTTON_TEXT';
export const LANG_DATA = {
  [ANSWER_CORRECT]: {
    [LANGUAGE_NAMES.EN]: 'Correct',
    [LANGUAGE_NAMES.MG]: 'Marina',
  },
  [ANSWER_WRONG]: {
    [LANGUAGE_NAMES.EN]: 'Wrong',
    [LANGUAGE_NAMES.MG]: 'Diso',
  },
  [LEARN_BUTTON_TEXT]: {
    [LANGUAGE_NAMES.EN]: 'Learn',
    [LANGUAGE_NAMES.MG]: 'Hianatra',
  },
  [PICK_BUTTON_TEXT]: {
    [LANGUAGE_NAMES.EN]: 'Pick',
    [LANGUAGE_NAMES.MG]: 'Hifidy',
  },
  [NEXT_BUTTON_TEXT]: {
    [LANGUAGE_NAMES.EN]: 'Next',
    [LANGUAGE_NAMES.MG]: 'Manaraka',
  },
  [RESHUFFLE_BUTTON_TEXT]: {
    [LANGUAGE_NAMES.EN]: 'Reshuffle',
    [LANGUAGE_NAMES.MG]: 'Atsombadika',
  },
  [SELECT_CATEGORY_HEADING]: {
    [LANGUAGE_NAMES.EN]: 'Select a category',
    [LANGUAGE_NAMES.MG]: 'Misafidiana sokajy',
  },
  [SEEN_PHRASES_HEADING]: {
    [LANGUAGE_NAMES.EN]: 'Seen phrases:',
    [LANGUAGE_NAMES.MG]: 'Andian-teny hita:',
  },
  [LEARNT_PHRASES_HEADING]: {
    [LANGUAGE_NAMES.EN]: 'Learnt phrases:',
    [LANGUAGE_NAMES.MG]: 'Andian-teny nianarana:',
  },
  [CATEGORY_HEADING]: {
    [LANGUAGE_NAMES.EN]: 'Category:',
    [LANGUAGE_NAMES.MG]: 'Sokajy: ',
  },
  [PHRASE_HEADING]: {
    [LANGUAGE_NAMES.EN]: 'The phrase:',
    [LANGUAGE_NAMES.MG]: 'Ilay andianteny:',
  },
  [SOLUTION_HEADING]: {
    [LANGUAGE_NAMES.EN]: 'Pick a solution:',
    [LANGUAGE_NAMES.MG]: 'Fidio ny valiny marina:',
  },
  [SHOULD_RESHUFFLE_TEXTAREA_CONTENT]: {
    [LANGUAGE_NAMES.EN]: 'You have answered all the questions in this category',
    [LANGUAGE_NAMES.MG]:
      "Efa voavalinao avokoa ny fanontaniana rehetra amin'ity sokajy ity",
  },
  [ENGLISH_PHRASE_HEADING]: {
    [LANGUAGE_NAMES.EN]: 'The phrase in English: ',
    [LANGUAGE_NAMES.MG]: "Ilay andianteny amin'ny teny Anglisy:",
  },
  [MALAGASY_PHRASE_HEADING]: {
    [LANGUAGE_NAMES.EN]: 'The phrase in Malagasy: ',
    [LANGUAGE_NAMES.MG]: "Ilay andianteny amin'ny teny Malagasy:",
  },
  [PLACEHOLDER_NEW_TERM]: {
    [LANGUAGE_NAMES.EN]: 'Enter here ',
    [LANGUAGE_NAMES.MG]: 'Midira eto ',
  },
  [ADD_BUTTON_TEXT]: {
    [LANGUAGE_NAMES.EN]: 'Add ',
    [LANGUAGE_NAMES.MG]: 'Ampio ',
  },
  [CLOSE_BUTTON_TEXT]: {
    [LANGUAGE_NAMES.EN]: 'Close',
    [LANGUAGE_NAMES.MG]: 'Akatona',
  },
};
