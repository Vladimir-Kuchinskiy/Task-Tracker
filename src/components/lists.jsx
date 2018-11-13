import React, { Component, PureComponent } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import List from "./list";
import Button from "./buttons/button";
import NewListForm from "./forms/newListForm";
import InnerList from "./innerList";

const ListsContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

const AddListContainer = styled.div`
  width: 300px;
  height: calc(100% - 10px - 17px);
`;

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
                <Button
                  onClick={this.onClickAdd}
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
