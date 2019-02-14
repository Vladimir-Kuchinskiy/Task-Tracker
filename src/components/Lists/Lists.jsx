import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Button from '../common/Button';
import NewListForm from './NewListForm';
import List from '../../containers/List';
import './styles/Lists.css';

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
      <div className="add-list-container">
        {this.state.addListClicked ? (
          <NewListForm onClose={this.toggleAddList} />
        ) : (
          <Button
            onClick={this.toggleAddList}
            classes="btn btn-outline-warning add-list"
            title="Add a list..."
          />
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="droppable-wrapper">
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <div className="lists" {...provided.droppableProps} ref={provided.innerRef}>
              {this.getListComponents()}
              {provided.placeholder}
              {this.renderAddList()}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default Lists;
