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
  render() {
    const { list, cards: originalCards, index } = this.props;
    const cards = list.cardIds.map(cardId => originalCards[cardId]);
    return <List list={list} cards={cards} index={index} />;
  }
}

class Lists extends Component {
  getListComponents = () => {
    const { listsOrder, lists, cards } = this.props;
    return listsOrder.map((listId, index) => {
      const list = lists[listId];
      return (
        <InnerList list={list} cards={cards} key={list.id} index={index} />
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
              {this.props.addListClicked ? (
                <NewListForm
                  onClose={this.props.onCloseNewListForm}
                  onSubmit={this.props.onSubmitNewListForm}
                />
              ) : (
                <AddList onClick={this.props.onClickAddList} />
              )}
            </AddListContainer>
          </ListsContainer>
        )}
      </Droppable>
    );
  }
}

export default Lists;
