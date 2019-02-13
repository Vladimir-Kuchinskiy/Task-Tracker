import React, { Component } from 'react';
import NewBoardForm from './NewBoardForm';

class AddBoard extends Component {
  state = {
    mouseOver: false,
    showNew: false
  };
  toggleMouse = () => {
    this.setState({ mouseOver: !this.state.mouseOver });
  };
  toggleClick = () => {
    const { showNew } = this.state;
    this.setState({ showNew: !showNew, mouseOver: !showNew });
  };
  plusImage = () => {
    return this.state.mouseOver ? 'plus-white.png' : 'plus.png';
  };
  render() {
    return (
      <React.Fragment>
        {this.state.showNew ? (
          <NewBoardForm onSubmit={this.handleSubmit} onClose={this.toggleClick} />
        ) : (
          <div
            className="col-3 add-board"
            onMouseOver={this.toggleMouse}
            onMouseOut={this.toggleMouse}
            onClick={this.toggleClick}
          >
            <img alt="Add Board" src={require('../../images/' + this.plusImage())} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default AddBoard;
