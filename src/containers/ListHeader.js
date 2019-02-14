import { connect } from 'react-redux';
import { deleteList } from '../actions/boardActions';
import ListHeader from '../components/Lists/ListHeader';

export default connect(
  null,
  { deleteList }
)(ListHeader);
