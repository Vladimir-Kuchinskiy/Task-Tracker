import React, { Component } from 'react';
import './styles/AddBoard.css';
import NewBoardForm from './NewBoardForm';
import AddBoardButton from './AddBoardButton';

class AddBoard extends Component {
  state = {
    showNew: false
  };

  toggleShowNew = () => {
    const { showNew } = this.state;
    this.setState({ showNew: !showNew, mouseOver: !showNew });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.showNew ? (
          <NewBoardForm onClose={this.toggleShowNew} />
        ) : (
          <AddBoardButton toggleShowNew={this.toggleShowNew} />
        )}
      </React.Fragment>
    );
  }
}

export default AddBoard;
