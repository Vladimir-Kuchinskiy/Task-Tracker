import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Lists from '../containers/Lists';
import './styles/Board.css';

class Board extends Component {
  componentDidMount() {
    this.props.getBoard(this.props.match.params.id);
  }

  handleDragEnd = args => {
    const { moveList, moveCard } = this.props;
    const { destination, source, type } = args;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    type === 'list' ? moveList(args) : moveCard(args);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar board">{this.props.board.title}</nav>
        <div className="content board">
          <DragDropContext onDragEnd={this.handleDragEnd}>
            <Lists />
          </DragDropContext>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
