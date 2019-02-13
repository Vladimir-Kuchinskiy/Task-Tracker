import { connect } from 'react-redux';
import Board from '../components/Board';
import { getBoard, moveList, moveCard } from '../actions/boardActions';

const mapStateToProps = ({ board }) => {
  return { board };
};

export default connect(
  mapStateToProps,
  { getBoard, moveList, moveCard }
)(Board);
