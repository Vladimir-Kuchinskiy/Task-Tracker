import React, { Component } from 'react';

import withDroppable from '../../hoc/withDroppable';

import Button from '../../common/Button';
import NewListForm from './NewListForm';
import List from '../../../containers/Board/List';
import './styles/Lists.css';

class Lists extends Component {
  state = {
    addListClicked: false
  };

  toggleAddList = () => {
    this.setState({ addListClicked: !this.state.addListClicked });
  };

  renderListComponents = () => {
    return this.props.lists.map((list, index) => {
      return (
        <List
          listId={list.id}
          id={`list-${list.id}`}
          key={list.id}
          index={index}
          toggleAddList={this.toggleAddList}
        />
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
    const { provided } = this.props;
    return (
      <div className="droppable-wrapper">
        <div className="lists" {...provided.droppableProps} ref={provided.innerRef}>
          {this.renderListComponents()}
          {provided.placeholder}
          {this.renderAddList()}
        </div>
      </div>
    );
  }
}

export default withDroppable(Lists);
