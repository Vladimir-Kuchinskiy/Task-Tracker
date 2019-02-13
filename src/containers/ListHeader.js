import { connect } from 'react-redux';
import { deleteList } from '../actions/boardActions';
import ListHeader from '../components/ListHeader';

export default connect(
  null,
  { deleteList }
)(ListHeader);
