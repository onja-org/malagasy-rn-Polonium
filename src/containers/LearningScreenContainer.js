import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {
  categoryPhrasesRoot,
  currentCategoryName,
  nativeLanguageRoot,
  categoriesRoot,
  learntPhrases,
  isLearntPhrases,
} from '../redux/selectors';

import {
  setLanguageName,
  setCurrentCategory,
  setCategories,
  addLearntPhrases,
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
    isLearntPhrases: isLearntPhrases(state),
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
