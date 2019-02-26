import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Lists from '../../containers/Lists';
import Spinner from '../common/Spinner';
import './Board.css';

class Board extends Component {
  componentDidMount() {
    const { isSignedIn, authToken, history, match, getBoard } = this.props;
    if (!isSignedIn) return history.push('/auth');
    getBoard(match.params.id, authToken);
  }

  handleDragEnd = args => {
    const { authToken, moveList, moveCard } = this.props;
    const { destination, source, type } = args;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    type === 'list' ? moveList(args, authToken) : moveCard(args, authToken);
  };

  render() {
    const content = this.props.loading ? (
      <Spinner style={{ position: 'absolute' }} />
    ) : (
      <React.Fragment>
        <nav className="navbar board">{this.props.board.title}</nav>
        <div className="content board">
          <DragDropContext onDragEnd={this.handleDragEnd}>
            <Lists />
          </DragDropContext>
        </div>
      </React.Fragment>
    );

    return content;
  }
}

export default Board;
