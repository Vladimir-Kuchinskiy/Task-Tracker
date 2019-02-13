import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Button from './common/Button';
import NewListForm from './forms/NewListForm';
import List from '../containers/List';

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

  toggleAddList = () => {
    this.setState({ addListClicked: !this.state.addListClicked });
  };

  getListComponents = () => {
    return this.props.lists.map((list, index) => {
      return (
        <List listId={list.id} key={list.id} index={index} toggleAddList={this.toggleAddList} />
      );
    });
  };

  renderAddList() {
    return (
      <AddListContainer>
        {this.state.addListClicked ? (
          <NewListForm onClose={this.toggleAddList} />
        ) : (
          <Button
            onClick={this.toggleAddList}
            classes="btn btn-outline-warning add-list"
            title="Add a list..."
          />
        )}
      </AddListContainer>
    );
  }

  render() {
    return (
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {provided => (
          <ListsContainer className="lists" {...provided.droppableProps} ref={provided.innerRef}>
            {this.getListComponents()}
            {provided.placeholder}
            {this.renderAddList()}
          </ListsContainer>
        )}
      </Droppable>
    );
  }
}

export default Lists;
