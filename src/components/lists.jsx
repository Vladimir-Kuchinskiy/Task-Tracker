import React, { Component, PureComponent } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import List from "./list";
import AddList from "./addList";
import NewListForm from "./newListForm";

const ListsContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

const AddListContainer = styled.div`
  width: 300px;
  height: calc(100% - 10px - 17px);
`;

class InnerList extends PureComponent {
  state = {
    addCardClicked: false
  };

  onClose = () => {
    this.setState({ addCardClicked: false });
  };

  onClickAdd = () => {
    this.setState({ addCardClicked: true });
  };

  onSubmit = (e, card, list) => {
    e.preventDefault();
    if (card.content === "") return;
    this.setState({ addCardClicked: false });
    this.props.onSubmitCardForm(card, list);
  };

  render() {
    const {
      list,
      cards: originalCards,
      index,
      onSubmitListForm,
      onSubmitCardForm
    } = this.props;
    const cards = list.cardIds.map(cardId => originalCards[cardId]);

    return (
      <List
        list={list}
        cards={cards}
        index={index}
        addCardClicked={this.state.addCardClicked}
        onClose={this.onClose}
        onClick={this.onClickAdd}
        onSubmitNewCardForm={this.onSubmit}
        onSubmitCardForm={onSubmitCardForm}
        onSubmitListForm={onSubmitListForm}
      />
    );
  }
}

class Lists extends Component {
  state = {
    addListClicked: false
  };

  onClickAdd = () => {
    this.setState({ addListClicked: true });
  };

  onCloseNewForm = () => {
    this.setState({ addListClicked: false });
  };

  onSubmitListForm = (e, list) => {
    e.preventDefault();
    if (list.title === "") return;
    this.props.onSubmitListForm(list);
    this.setState({ addListClicked: false });
  };

  getListComponents = () => {
    const {
      listsOrder,
      lists,
      cards,
      onSubmitCardForm,
      onSubmitListForm
    } = this.props;
    return listsOrder.map((listId, index) => {
      const list = lists[listId];
      return (
        <InnerList
          list={list}
          cards={cards}
          key={list.id}
          index={index}
          onSubmitCardForm={onSubmitCardForm}
          onSubmitListForm={onSubmitListForm}
        />
      );
    });
  };

  render() {
    return (
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {provided => (
          <ListsContainer
            className="lists"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {this.getListComponents()}
            {provided.placeholder}
            <AddListContainer>
              {this.state.addListClicked ? (
                <NewListForm
                  onClose={this.onCloseNewForm}
                  onSubmit={this.onSubmitListForm}
                />
              ) : (
                <AddList onClick={this.onClickAdd} />
              )}
            </AddListContainer>
          </ListsContainer>
        )}
      </Droppable>
    );
  }
}

export default Lists;
