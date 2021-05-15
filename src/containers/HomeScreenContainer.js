import {connect} from 'react-redux';
import Home from '../screens/Home';
import {
  setCategories,
  setCurrentCategory,
  setPhrases,
  setLanguageName,
} from '../redux/actions';
import {categoriesRoot, nativeLanguageRoot} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    nativeLanguage: nativeLanguageRoot(state),
  };
}
const mapDispatchToProps = {
  setCategories,
  setCurrentCategory,
  setPhrases,
  setLanguageName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
