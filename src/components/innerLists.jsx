import React, { PureComponent } from "react";
import List from "./list";

class InnerLists extends PureComponent {
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
      onSubmitCardForm
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
        onSubmitNewCardForm={this.onSubmitNewCard}
        onSubmitCardForm={onSubmitCardForm}
        onSubmitListForm={onSubmitListForm}
      />
    );
  }
}

export default InnerLists;
