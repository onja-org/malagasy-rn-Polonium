import {connect} from 'react-redux';
import AddNewTerm from '../screens/AddNewTerm';
import {setLanguageName} from '../redux/actions';
import {categoriesRoot, nativeLanguageRoot} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    nativeLanguage: nativeLanguageRoot(state),
  };
}
const mapDispatchToProps = {
  setLanguageName,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTerm);
