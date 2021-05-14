import {LANGUAGE_NAMES} from '../data/dataUtils';
// returns shuffeled array without mutating original one
// based on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

export const shuffleArray = arrayToShuffle => {
  const array = [...arrayToShuffle];
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// Set category name in learnt phrases screen
export const getCurrentCategoryName = (
  currentCategoryName,
  shouldLearntPhraseDisplayed,
  catNameInEnglish,
  catNameInMalagasy,
) => {
  if (shouldLearntPhraseDisplayed) {
    const phrasesCategory = {
      id: 2,
      name: {
        en: catNameInEnglish,
        mg: catNameInMalagasy,
      },
    };
    return phrasesCategory?.name?.[LANGUAGE_NAMES.EN];
  } else {
    return currentCategoryName;
  }
};
