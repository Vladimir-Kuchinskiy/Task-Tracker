import mapKeys from 'lodash/mapKeys';

export const mapBoardContent = ({ data: { id, attributes }, included }) => {
  const { title, listIds } = attributes;
  return {
    board: { id, title },
    lists: mapLists(id, included),
    cards: mapCards(included),
    listIds
  };
};

export const mapBoards = ({ data }) => {
  return data.map(o => ({ id: o.id, title: o.attributes.title }));
};

export const mapBoard = ({ data: { id, attributes } }) => {
  return { id, title: attributes.title };
};

export const mapList = ({ data: { id, attributes, relationships } }) => {
  return { id, ...attributes, boardId: relationships.board.data.id };
};

export const mapCard = ({ data: { id, attributes, relationships } }) => {
  return { id, ...attributes, listId: relationships.list.data.id };
};

const mapLists = (boardId, included) => {
  let lists = included
    .map(({ id, type, attributes }) => {
      if (type === 'list') {
        return { id, boardId, ...attributes };
      }
      return undefined;
    })
    .filter(Boolean);
  return mapKeys(lists, 'id');
};

const mapCards = included => {
  let cards = included
    .map(({ id, type, relationships: { list }, attributes }) => {
      if (type === 'card') {
        return { id, listId: list.data.id, ...attributes };
      }
      return undefined;
    })
    .filter(Boolean);
  return mapKeys(cards, 'id');
};
