export const moveList = (state, args) => {
  const { listsOrder } = state;
  const { destination, source, draggableId } = args;
  const newListsOrder = Array.from(listsOrder);
  newListsOrder.splice(source.index, 1);
  newListsOrder.splice(destination.index, 0, draggableId);
  return {
    ...state,
    listsOrder: newListsOrder
  };
};

export const moveCardInList = (state, start, args) => {
  const { lists } = state;
  const { destination, source, draggableId } = args;
  const newCardIds = Array.from(start.cardIds);
  newCardIds.splice(source.index, 1);
  newCardIds.splice(destination.index, 0, draggableId);
  const draggableList = { ...start, cardIds: newCardIds };
  return {
    ...state,
    lists: {
      ...lists,
      [draggableList.id]: draggableList
    }
  };
};

export const moveCardBetweenLists = (state, start, finish, args) => {
  const { lists, cards } = state;
  const { destination, source, draggableId } = args;
  const draggableCard = cards[draggableId];
  draggableCard.listId = finish.id;
  const startCardIds = Array.from(start.cardIds);
  startCardIds.splice(source.index, 1);
  const draggableList = { ...start, cardIds: startCardIds };
  const finishCardIds = Array.from(finish.cardIds);
  finishCardIds.splice(destination.index, 0, draggableId);
  const droppableList = { ...finish, cardIds: finishCardIds };
  return {
    ...state,
    lists: {
      ...lists,
      [draggableList.id]: draggableList,
      [droppableList.id]: droppableList
    },
    cards: { ...cards, [draggableCard.id]: draggableCard }
  };
};
