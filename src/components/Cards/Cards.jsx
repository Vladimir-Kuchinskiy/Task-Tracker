import React, { PureComponent } from 'react';
import Card from './Card';

class Cards extends PureComponent {
  render() {
    const { cards } = this.props;
    return cards.map((card, index) => <Card key={card.id} card={card} index={index} />);
  }
}

export default Cards;
