import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardContainer = styled.li`
  background-color: ${props =>
    props.isDragging ? "rgb(241, 241, 241)" : "#fff"};
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const Card = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <CardContainer
          className="draggable"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {" "}
          {card.content}
        </CardContainer>
      )}
    </Draggable>
  );
};

export default Card;
