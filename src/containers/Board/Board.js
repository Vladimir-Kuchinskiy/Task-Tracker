import { connect } from 'react-redux';
import { getBoard, moveList, moveCard } from '../../actions/boardActions';
import Board from '../../components/Board/Board';

const mapStateToProps = ({ board, auth }) => {
  return {
    board: board.board,
    authToken: auth.authToken,
    loading: board.loading
  };
};

export default connect(
  mapStateToProps,
  { getBoard, moveList, moveCard }
)(Board);
