import React, { PureComponent } from "react";
import Card from "./card";

class InnerCards extends PureComponent {
  render() {
    return this.props.cards.map((card, index) => (
      <Card
        key={card.id}
        card={card}
        index={index}
        onSubmit={this.props.onSubmit}
      />
    ));
  }
}

export default InnerCards;
