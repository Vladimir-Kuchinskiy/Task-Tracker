import React, { Component } from 'react';
import NewCardForm from '../Cards/NewCardForm';
import Button from '../common/Button';
import './styles/ListFooter.css';

class ListFooter extends Component {
  state = {
    addCardClicked: false
  };
  toggleNewCard = () => {
    this.setState({ addCardClicked: !this.state.addCardClicked });
  };
  render() {
    const { listId } = this.props;
    return (
      <footer className={this.state.addCardClicked ? 'footer footer-with-form' : 'footer'}>
        {this.state.addCardClicked ? (
          <NewCardForm
            form={`NewCardForm-${listId}`}
            onClose={this.toggleNewCard}
            listId={listId}
          />
        ) : (
          <Button classes="btn add-card" onClick={this.toggleNewCard} title="Add a card..." />
        )}
      </footer>
    );
  }
}

export default ListFooter;
