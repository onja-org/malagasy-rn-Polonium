import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {setLanguageName} from '../redux/actions';
import {
  categoryPhrasesRoot,
  currentCategoryName,
  nativeLanguageRoot,
} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categoryPhrases: categoryPhrasesRoot(state),
    currentCategoryName: currentCategoryName(state),
    nativeLanguage: nativeLanguageRoot(state),
  };
}
const mapDispatchToProps = {
  setLanguageName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
