import React, { Component } from "react";
import NewCardForm from "./forms/newCardForm";
import Button from "./common/button";

class ListFooter extends Component {
  state = {
    addCardClicked: false
  };
  toggleNewCard = () => {
    this.setState({
      ...this.state,
      addCardClicked: !this.state.addCardClicked
    });
  };
  handleSubmit = (e, data, list) => {
    e.preventDefault();
    if (data.content === "") return;
    this.props.onSubmitCardForm(data, list);
    this.toggleNewCard();
  };
  render() {
    return (
      <footer
        className={
          this.state.addCardClicked ? "footer footer-with-form" : "footer"
        }
      >
        {this.state.addCardClicked ? (
          <NewCardForm
            onSubmit={this.handleSubmit}
            onClose={this.toggleNewCard}
            list={this.props.list}
          />
        ) : (
          <Button
            classes="btn add-card"
            onClick={this.toggleNewCard}
            title="Add a card..."
          />
        )}
      </footer>
    );
  }
}

export default ListFooter;
