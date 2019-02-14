import { connect } from 'react-redux';
import CardModal from '../components/Cards/CardModal';
import { deleteCard } from '../actions/boardActions';

const mapStateToProps = ({ board }, { cardId }) => {
  const card = board.cards[cardId];
  return { card };
};

export default connect(
  mapStateToProps,
  { deleteCard }
)(CardModal);
