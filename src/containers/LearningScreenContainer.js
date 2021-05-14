import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {
  setLanguageName,
  setCurrentCategory,
  setCategories,
  addLearntPhrases,
  removeWrongAswerFromLearntPhrases,
} from '../redux/actions';
import {
  categoryPhrasesRoot,
  currentCategoryName,
  nativeLanguageRoot,
  categoriesRoot,
  shouldLearntPhraseDisplayed,
  learntPhrases,
} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    categoryPhrases: categoryPhrasesRoot(state),
    currentCategoryName: currentCategoryName(state),
    nativeLanguage: nativeLanguageRoot(state),
    learntPhrases: learntPhrases(state),
    shouldLearntPhraseDisplayed: shouldLearntPhraseDisplayed(state),
  };
}

const mapDispatchToProps = {
  setLanguageName,
  setCategories,
  setCurrentCategory,
  addLearntPhrases,
  removeWrongAswerFromLearntPhrases,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
