import { connect } from 'react-redux';
import CardModal from '../components/Board/Cards/CardModal';
import { deleteCard } from '../actions/boardActions';

const mapStateToProps = ({ board, auth }, { cardId }) => {
  const card = board.cards[cardId];
  return { card, authToken: auth.authToken };
};

export default connect(
  mapStateToProps,
  { deleteCard }
)(CardModal);
