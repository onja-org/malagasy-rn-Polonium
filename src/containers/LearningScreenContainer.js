import {connect} from 'react-redux';
import Learning from '../screens/Learning';
import {categoryPhrasesRoot, currentCategoryName} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categoryPhrases: categoryPhrasesRoot(state),
    currentCategoryName: currentCategoryName(state),
  };
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
