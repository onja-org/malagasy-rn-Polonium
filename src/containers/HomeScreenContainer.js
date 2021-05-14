import {connect} from 'react-redux';
import Home from '../screens/Home';
import {
  setCategories,
  setCurrentCategory,
  setPhrases,
  showLearntPhrases,
  synchronizeStorageToRedux,
} from '../redux/actions';
import {
  categoriesRoot,
  nativeLanguageRoot,
  shouldLearntPhraseDisplayed,
  learntPhrases,
  currentCategoryIdRoot,
} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    nativeLanguage: nativeLanguageRoot(state),
    shouldLearntPhraseDisplayed: shouldLearntPhraseDisplayed(state),
    currentCategoryId: currentCategoryIdRoot(state),
    learntPhrases: learntPhrases(state),
  };
}
const mapDispatchToProps = {
  setCategories,
  setCurrentCategory,
  setPhrases,
  showLearntPhrases,
  synchronizeStorageToRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
