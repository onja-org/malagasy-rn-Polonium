import { connect } from 'react-redux';
import Home from '../screens/Home';
import {
  setCategories,
  setCurrentCategory,
  setPhrases,
  setLanguageName,
  synchronizeStorageToRedux
} from '../redux/actions';

import {
  categoriesRoot,
  nativeLanguageRoot,
  learntPhrases,
  currentCategoryIdRoot,
  isLearntPhrases,
  newTermsRoot,
  seenPhrasesRoot,
} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    nativeLanguage: nativeLanguageRoot(state),
    currentCategoryId: currentCategoryIdRoot(state),
    learntPhrases: learntPhrases(state),
    isLearntPhrases: isLearntPhrases(state),
    seenPhrases: seenPhrasesRoot(state),
    newTerms: newTermsRoot(state),
  }
}

const mapDispatchToProps = {
  setCategories,
  setCurrentCategory,
  setPhrases,
  setLanguageName,
  synchronizeStorageToRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
