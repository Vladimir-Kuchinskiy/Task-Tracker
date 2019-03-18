import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = ({ cards }) => {
  return cards.map((card, index) => (
    <Card key={card.id} card={card} id={`card-${card.id}`} index={index} />
  ));
};

Cards.propTypes = {
  cards: PropTypes.array
};

export default Cards;
