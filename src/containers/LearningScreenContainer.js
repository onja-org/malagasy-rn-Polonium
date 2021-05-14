import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {
  categoriesRoot,
  categoryPhrasesRoot,
  currentCategoryName,
  shouldLearntPhraseDisplayed,
  learntPhrases,
} from '../redux/selectors';
import {
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
    shouldLearntPhraseDisplayed: shouldLearntPhraseDisplayed(state),
    learntPhrases: learntPhrases(state),
  };
}

const mapDispatchToProps = {
  setCategories,
  setCurrentCategory,
  addLearntPhrases,
  removeWrongAswerFromLearntPhrases,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
