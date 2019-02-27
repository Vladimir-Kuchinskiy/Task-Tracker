import React, { useState } from 'react';
import NewCardForm from '../Cards/NewCardForm';
import Button from '../../common/Button';
import './styles/ListFooter.css';

const ListFooter = ({ listId }) => {
  const [addCard, setAddCard] = useState(false);

  return (
    <footer className={addCard ? 'footer footer-with-form' : 'footer'}>
      {addCard ? (
        <NewCardForm
          form={`NewCardForm-${listId}`}
          onClose={() => setAddCard(!addCard)}
          listId={listId}
        />
      ) : (
        <Button classes="btn add-card" onClick={() => setAddCard(!addCard)} title="Add a card..." />
      )}
    </footer>
  );
};

export default ListFooter;
