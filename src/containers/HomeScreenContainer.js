import {connect} from 'react-redux';
import Home from '../screens/Home';
import {
  setCategories,
  setCurrentCategory,
  setPhrases,
  setLanguageName,
  synchronizeStorageToRedux,
} from '../redux/actions';
import {
  categoriesRoot,
  nativeLanguageRoot,
  learntPhrases,
  newTermsRoot,
} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    nativeLanguage: nativeLanguageRoot(state),
    newTerms: newTermsRoot(state),
    learntPhrases: learntPhrases(state),
  };
}
const mapDispatchToProps = {
  setCategories,
  setCurrentCategory,
  setPhrases,
  setLanguageName,
  synchronizeStorageToRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
