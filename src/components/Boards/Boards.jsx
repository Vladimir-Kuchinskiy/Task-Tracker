import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BoardsDisplayer from '../common/BoardsDisplayer';
import Spinner from '../common/Spinner';
import './styles/Boards.css';

class Boards extends Component {
  componentDidMount() {
    const { authToken, getBoards } = this.props;
    getBoards(authToken);
  }

  render() {
    const { boards, loading } = this.props;
    return loading ? (
      <Spinner style={{ marginLeft: '36%' }} />
    ) : (
      <div className="boards">
        <div className="row">
          <div className="col-9">
            <BoardsDisplayer title="Your boards" boards={boards} isCreator={true} />
          </div>
        </div>
      </div>
    );
  }
}

Boards.propTypes = {
  authToken: PropTypes.string,
  loading: PropTypes.bool,
  boards: PropTypes.array,
  getBoards: PropTypes.func
};

export default Boards;
