 import {connect} from 'react-redux';
import Learning from '../screens/Learning';

import {
  categoriesRoot,
  categoryPhrasesRoot,
  currentCategoryName,
  seenPhrasesRoot,
  nativeLanguageRoot,
  learntPhrases,
  isLearntPhrases,
  isSeenPhrases,
} from '../redux/selectors';

import {
  setLanguageName,
  setCurrentCategory,
  setCategories,
  addLearntPhrases,
  addSeenPhrase,
  removeFromSeenPhrases,
  setSeenPhrases,
  removeWrongAswerFromLearntPhrases,
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    categoryPhrases: categoryPhrasesRoot(state),
    currentCategoryName: currentCategoryName(state),
    nativeLanguage: nativeLanguageRoot(state),
    isLearntPhrases: isLearntPhrases(state),
    learntPhrases: learntPhrases(state),
    isSeenPhrases: isSeenPhrases(state),
    seenPhrases: seenPhrasesRoot(state),
  };
}

const mapDispatchToProps = {
  setLanguageName,
  setCategories,
  addLearntPhrases,
  removeWrongAswerFromLearntPhrases,
  addSeenPhrase,
  setCurrentCategory,
  removeFromSeenPhrases,
  setSeenPhrases,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
