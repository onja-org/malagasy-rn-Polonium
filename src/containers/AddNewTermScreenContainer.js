import {connect} from 'react-redux';
import AddNewTerm from '../screens/AddNewTerm';
import {setLanguageName, addNewTerm, switchTheme} from '../redux/actions';
import {
  categoriesRoot,
  nativeLanguageRoot,
  themeModeRoot,
} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    nativeLanguage: nativeLanguageRoot(state),
    themeMode: themeModeRoot(state),
  };
}
const mapDispatchToProps = {
  setLanguageName,
  addNewTerm,
  switchTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTerm);
