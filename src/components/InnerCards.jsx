import React, { PureComponent } from "react";
import Card from "./Card";

class InnerCards extends PureComponent {
  render() {
    return this.props.cards.map((card, index) => (
      <Card
        key={card.id}
        card={card}
        index={index}
        onSubmit={this.props.onSubmit}
        onDelete={this.props.onDeleteCard}
      />
    ));
  }
}

export default InnerCards;
