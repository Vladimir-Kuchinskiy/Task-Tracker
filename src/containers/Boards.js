import { connect } from 'react-redux';
import Boards from '../components/Boards/Boards';
import { getBoards } from '../actions/boardsActions';

const mapStateToProps = ({ boards, auth }) => {
  return {
    boards: Object.values(boards.boards),
    authToken: auth.authToken,
    isSignedIn: auth.authToken !== null,
    loading: boards.loading
  };
};

export default connect(
  mapStateToProps,
  { getBoards }
)(Boards);
