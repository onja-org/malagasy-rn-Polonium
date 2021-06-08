import { connect } from 'react-redux';
import Learning from '../screens/Learning';
import { setLanguageName } from '../redux/actions';
import { addSeenPhrase, setCurrentCategory, removeFromSeenPhrases, setSeenPhrases } from '../redux/actions';
import { 
  categoriesRoot,
  categoryPhrasesRoot,
  currentCategoryName,
  seenPhrasesRoot,
  nativeLanguageRoot,
  isSeenPhrases
} from '../redux/selectors';

function mapStateToProps(state) {
  return {
    categories: categoriesRoot(state),
    categoryPhrases: categoryPhrasesRoot(state),
    currentCategoryName: currentCategoryName(state),
    nativeLanguage: nativeLanguageRoot(state),
    isSeenPhrases: isSeenPhrases(state),
    seenPhrases: seenPhrasesRoot(state)
  };
}

const mapDispatchToProps = {
  setLanguageName,
  addSeenPhrase,
  setCurrentCategory,
  removeFromSeenPhrases,
  setSeenPhrases,
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
