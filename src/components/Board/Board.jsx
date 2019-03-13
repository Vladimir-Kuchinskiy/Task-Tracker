import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Lists from '../../containers/Board/Lists';
import Spinner from '../common/Spinner';
import './Board.css';

class Board extends Component {
  componentDidMount() {
    const { authToken, match, getBoard } = this.props;
    getBoard(match.params.id, match.params.teamId, authToken);
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
    const { loading, board } = this.props;
    const content = loading ? (
      <Spinner />
    ) : (
      <React.Fragment>
        <nav className="navbar board">{board.title}</nav>
        <div className="content board">
          <DragDropContext onDragEnd={this.handleDragEnd}>
            <Lists id="all-lists" type="list" direction="horizontal" />
          </DragDropContext>
        </div>
      </React.Fragment>
    );

    return content;
  }
}

export default Board;
