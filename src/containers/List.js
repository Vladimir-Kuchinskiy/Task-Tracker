import { connect } from 'react-redux';
import List from '../components/Board/Lists/List';

const mapStateToProps = ({ board }, ownProps) => {
  const list = board.lists[ownProps.listId];
  const cards = list.cardIds.map(cardId => board.cards[cardId]);
  return {
    list,
    cards
  };
};

export default connect(mapStateToProps)(List);
