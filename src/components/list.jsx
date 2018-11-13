import React, { Component, PureComponent } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "./card";
import styled from "styled-components";
import NewCardForm from "./NewCardForm";
import EditForm from "./editForm";

const CardsList = styled.ul`
  list-style: none;
  background-color: ${props => (props.isDraggingOver ? "#c8cacc" : "")};
  max-height: calc(100% - 36px - 36px);
  overflow-y: auto;
`;

const ListContainer = styled.div`
  width: 300px;
  height: calc(100% - 10px - 17px);
`;

class InnerList extends PureComponent {
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

class List extends Component {
  state = {
    data: { ...this.props.list },
    editListClicked: false
  };

  handleSubmit = (e, list) => {
    e.preventDefault();
    this.props.onSubmitListForm(list);
    this.setState({ ...this.state, editListClicked: false });
  };

  handleClick = () => {
    this.setState({ ...this.state, editListClicked: true });
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data.title = input.value;
    this.setState({ ...this.state, data: data });
  };

  render() {
    const {
      list,
      cards,
      index,
      onSubmitNewCardForm,
      onSubmitCardForm,
      onClose,
      onClick,
      addCardClicked
    } = this.props;
    return (
      <Draggable draggableId={list.id} index={index}>
        {provided => (
          <ListContainer
            className="list"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <header {...provided.dragHandleProps} onClick={this.handleClick}>
              {this.state.editListClicked ? (
                <EditForm
                  data={this.state.data}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  value="title"
                />
              ) : (
                list.title
              )}
            </header>
            <Droppable droppableId={list.id} type="card">
              {(provided, snapshot) => (
                <div
                  className="list-container"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <CardsList isDraggingOver={snapshot.isDraggingOver}>
                    <InnerList cards={cards} onSubmit={onSubmitCardForm} />
                    {provided.placeholder}
                  </CardsList>
                  <footer
                    className={
                      addCardClicked ? "footer footer-with-form" : "footer"
                    }
                  >
                    {addCardClicked ? (
                      <NewCardForm
                        onSubmit={onSubmitNewCardForm}
                        onClose={onClose}
                        list={list}
                      />
                    ) : (
                      <div className="btn add-card" onClick={onClick}>
                        Add a card...
                      </div>
                    )}
                  </footer>
                </div>
              )}
            </Droppable>
          </ListContainer>
        )}
      </Draggable>
    );
  }
}

export default List;
