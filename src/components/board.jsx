import React, { Component } from "react";
import Lists from "./lists";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "../initialData";

class Board extends Component {
  state = initialData.boards["board-1"];

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

  handleDragEnd = result => {
    const { destination, source, type } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    type === "list" ? this.moveLists(result) : this.moveCards(result);
  };

  handleSubmitListForm = list => {
    const lists = this.state.lists;
    const listsOrder = this.state.listsOrder;
    if (list.id === "new") {
      list.id = Math.floor(Math.random() * 10 + 1).toString() + "-list";
      lists[list.id] = list;
      listsOrder.push(list.id);
      this.setState({
        ...this.state,
        lists: lists,
        listsOrder: listsOrder
      });
      return;
    }
    lists[list.id] = list;
    this.setState({
      ...this.state,
      lists: lists
    });
  };

  handleSubmitCardForm = (card, list) => {
    const cards = this.state.cards;
    const lists = this.state.lists;
    card.id = Math.floor(Math.random() * 10 + 1).toString() + "-card";
    cards[card.id] = card;
    lists[list.id].cardIds.push(card.id);
    this.setState({
      ...this.state,
      lists: lists,
      cards: cards
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar board">{this.state.board.title}</nav>
        <div className="board">
          <DragDropContext onDragEnd={this.handleDragEnd}>
            <Lists
              lists={this.state.lists}
              cards={this.state.cards}
              listsOrder={this.state.listsOrder}
              onSubmitListForm={this.handleSubmitListForm}
              onSubmitCardForm={this.handleSubmitCardForm}
            />
          </DragDropContext>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
