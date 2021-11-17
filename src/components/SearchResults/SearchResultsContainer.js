import {connect} from 'react-redux';
import {getCardsForList} from '../../../redux/cardsRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {}; 
  
  return {
    ...listParams,
    cards: getCardsForList(state, id),
  };
};

export default connect(mapStateToProps)(SearchResults);