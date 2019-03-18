import React, { Component } from 'react';
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

export default Boards;
