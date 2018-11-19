import React, { Component } from "react";
import List from "./list";

class InnerLists extends Component {
  state = {
    addCardClicked: false
  };

  onCloseNewCard = () => {
    this.setState({ addCardClicked: false });
  };

  onClickAddCard = () => {
    this.setState({ addCardClicked: true });
  };

  onSubmitNewCard = (e, card, list) => {
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
      onSubmitCardForm,
      handleDeleteCard
    } = this.props;
    const cards = list.cardIds.map(cardId => originalCards[cardId]);

    return (
      <List
        list={list}
        cards={cards}
        index={index}
        addCardClicked={this.state.addCardClicked}
        onClose={this.onCloseNewCard}
        onClick={this.onClickAddCard}
        onDeleteCard={handleDeleteCard}
        onSubmitNewCardForm={this.onSubmitNewCard}
        onSubmitCardForm={onSubmitCardForm}
        onSubmitListForm={onSubmitListForm}
      />
    );
  }
}

export default InnerLists;
