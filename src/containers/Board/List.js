import { connect } from 'react-redux';

import List from '../../components/Board/Lists/List';

const mapStateToProps = ({ board }, { listId }) => {
  const list = board.lists[listId];
  const cards = list.cardIds.map(cardId => board.cards[cardId]);
  return {
    list,
    cards
  };
};

export default connect(mapStateToProps)(List);
