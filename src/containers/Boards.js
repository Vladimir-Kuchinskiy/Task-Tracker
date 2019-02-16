import { connect } from 'react-redux';
import Boards from '../components/Boards';
import { getBoards } from '../actions/boardsActions';

const mapStateToProps = ({ boards }) => {
  return { boards: Object.values(boards) };
};

export default connect(
  mapStateToProps,
  { getBoards }
)(Boards);
