import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Button from "./common/button";
import NewListForm from "./forms/newListForm";
import InnerLists from "./innerLists";

const ListsContainer = styled.div`
  display: flex;
`;

const AddListContainer = styled.div`
  width: 300px;
  height: calc(100% - 10px - 17px);
`;

class Lists extends Component {
  state = {
    addListClicked: false
  };

  onClickAddList = () => {
    this.setState({ addListClicked: true });
  };

  onCloseNewListForm = () => {
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
      onSubmitListForm,
      handleDeleteCard
    } = this.props;
    return listsOrder.map((listId, index) => {
      const list = lists[listId];
      return (
        <InnerLists
          list={list}
          cards={cards}
          key={list.id}
          index={index}
          handleDeleteCard={handleDeleteCard}
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
                  onClose={this.onCloseNewListForm}
                  onSubmit={this.onSubmitListForm}
                />
              ) : (
                <Button
                  onClick={this.onClickAddList}
                  classes="btn btn-outline-warning add-list"
                  title="Add a list..."
                />
              )}
            </AddListContainer>
          </ListsContainer>
        )}
      </Droppable>
    );
  }
}

export default Lists;
