import { connect } from 'react-redux';
import Lists from '../components/Lists/Lists';

const mapStateToProps = ({ board }) => {
  const lists = board.listsOrder.map(id => board.lists[id]);
  return {
    lists,
    cards: board.cards,
    listsOrder: board.listsOrder
  };
};

export default connect(mapStateToProps)(Lists);
