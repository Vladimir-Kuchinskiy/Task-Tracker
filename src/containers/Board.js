import { connect } from 'react-redux';
import Board from '../components/Board/Board';
import { getBoard, moveList, moveCard } from '../actions/boardActions';

const mapStateToProps = ({ board, auth }) => {
  return {
    board: board.board,
    authToken: auth.authToken,
    isSignedIn: auth.authToken !== null,
    loading: board.loading
  };
};

export default connect(
  mapStateToProps,
  { getBoard, moveList, moveCard }
)(Board);
