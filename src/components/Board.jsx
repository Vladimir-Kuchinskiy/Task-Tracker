import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Lists from '../containers/Lists';

class Board extends Component {
  componentDidMount() {
    this.props.getBoard(this.props.match.params.id);
  }

  moveLists({ destination, source, draggableId }) {
    const newListsOrder = Array.from(this.state.listsOrder);
    newListsOrder.splice(source.index, 1);
    newListsOrder.splice(destination.index, 0, draggableId);
    const newState = {
      ...this.state,
      listsOrder: newListsOrder
    };
    this.setState(newState);
  }

  moveCards({ destination, source, draggableId }) {
    const start = this.state.lists[source.droppableId];
    const finish = this.state.lists[destination.droppableId];
    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);
      const newList = { ...start, cardIds: newCardIds };
      const newState = {
        ...this.state,
        lists: {
          ...this.state.lists,
          [newList.id]: newList
        }
      };
      this.setState(newState);
      return;
    }
    const startCardIds = Array.from(start.cardIds);
    startCardIds.splice(source.index, 1);
    const newStart = { ...start, cardIds: startCardIds };
    const finishCardIds = Array.from(finish.cardIds);
    finishCardIds.splice(destination.index, 0, draggableId);
    const newFinish = { ...finish, cardIds: finishCardIds };
    const newState = {
      ...this.state,
      lists: {
        ...this.state.lists,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
  }

  handleDragEnd = args => {
    debugger;
    const { destination, source, type } = args;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    type === 'list' ? this.moveLists(args) : this.moveCards(args);
  };

  render() {
    return (
      this.props.board && (
        <React.Fragment>
          <nav className="navbar board">{this.props.board.title}</nav>
          <div className="content board">
            <DragDropContext onDragEnd={this.handleDragEnd}>
              <Lists />
            </DragDropContext>
          </div>{' '}
        </React.Fragment>
      )
    );
  }
}

export default Board;
