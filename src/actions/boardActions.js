import { types } from '../constants';

let initialData = {
  boards: [
    {
      board: {
        id: 'board-1',
        title: 'My first board'
      },
      cards: {
        'card-1': {
          id: 'card-1',
          listId: 'lists-1',
          content: 'Take out the garbage',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere
          vel nulla sequi tempore, deleniti explicabo sed? Ducimus, amet dolores
          veritatis natus ipsa, fuga modi ut atque officia provident ratione!
          Cumque saepe ex minima, doloremque, rerum repudiandae consectetur
          earum consequuntur dolorem porro laudantium dolor blanditiis obcaecati
          a eaque quos commodi eius facere? Voluptatem laborum veniam
          accusantium sit suscipit animi maiores. Quae ipsum eligendi expedita
          similique a id, ipsa quo debitis et natus alias illo! Quia
          perspiciatis tempora maiores corrupti laudantium? Ratione quo possimus
          hic! Iste quae quidem voluptate pariatur deleniti?`
        },
        'card-2': {
          id: 'card-2',
          listId: 'lists-1',
          content: 'Watch my favorite show',
          description: ''
        },
        'card-3': { id: 'card-3', listId: 'lists-1', content: 'Charge my phone', description: '' },
        'card-4': { id: 'card-4', listId: 'lists-1', content: 'Cook dinner', description: '' }
      },
      lists: {
        'lists-1': {
          id: 'lists-1',
          title: 'To do',
          boardId: 'board-1',
          cardIds: ['card-1', 'card-2', 'card-3', 'card-4']
        },
        'list-2': {
          id: 'list-2',
          title: 'In Progress',
          boardId: 'board-1',
          cardIds: []
        }
      },
      listsOrder: ['lists-1', 'list-2']
    },
    {
      board: {
        id: 'board-2',
        title: 'My second board'
      },
      cards: {
        'card-5': { id: 'card-5', listId: 'lists-3', content: 'Take out the garbage' },
        'card-6': { id: 'card-6', listId: 'lists-3', content: 'Watch my favorite show' },
        'card-7': { id: 'card-7', listId: 'lists-3', content: 'Charge my phone' },
        'card-8': { id: 'card-8', listId: 'lists-3', content: 'Cook dinner' }
      },
      lists: {
        'lists-3': {
          id: 'lists-3',
          title: 'To do',
          boardId: 'board-2',
          cardIds: ['card-5', 'card-6', 'card-7', 'card-8']
        },
        'list-4': {
          id: 'list-4',
          title: 'In Progress',
          boardId: 'board-2',
          cardIds: []
        }
      },
      listsOrder: ['lists-3', 'list-4']
    },
    {
      board: {
        id: 'board-3',
        title: 'My second board'
      },
      cards: {},
      lists: {
        'lists-3': {
          id: 'lists-3',
          title: 'To do',
          boardId: 'board-3',
          cardIds: []
        },
        'list-4': {
          id: 'list-4',
          title: 'In Progress',
          boardId: 'board-3',
          cardIds: []
        }
      },
      listsOrder: ['lists-3', 'list-4']
    },
    {
      board: {
        id: 'board-4',
        title: 'My second board'
      },
      cards: {},
      lists: {
        'lists-3': {
          id: 'lists-3',
          title: 'To do',
          cardIds: []
        },
        'list-4': {
          id: 'list-4',
          title: 'In Progress',
          cardIds: []
        }
      },
      listsOrder: ['lists-3', 'list-4']
    }
  ]
};

// Board
export const getBoard = id => {
  const { boards } = initialData;
  const board = boards.find(board => board.board.id === id);
  if (!board) window.location = '/not-found';
  return { type: types.GET_BOARD, payload: board };
};

// const fetchStreams = () => async dispatch => {
//   const response = await streams.get("/streams");

//   dispatch({ type: types.FETCH_STREAMS, payload: response.data });
// };

// const fetchStream = id => async dispatch => {
//   const response = await streams.get(`/streams/${id}`);

//   dispatch({ type: types.FETCH_STREAM, payload: response.data });
// };

// List
export const createList = (data, boardId) => {
  const newList = {
    id: `list-${Math.floor(Math.random() * 10000 + 1)}`,
    boardId: boardId,
    title: data.title,
    cardIds: []
  };
  return { type: types.CREATE_LIST, payload: newList };
};

export const editList = (data, listId) => {
  return { type: types.EDIT_LIST, payload: { data, listId } };
};

export const deleteList = listId => {
  return { type: types.DELETE_LIST, payload: listId };
};

// Card
export const createCard = (data, listId) => {
  const newCard = {
    id: `card-${Math.floor(Math.random() * 100 + 1)}`,
    listId: listId,
    content: data.content,
    description: '',
    cardIds: []
  };
  return { type: types.CREATE_CARD, payload: newCard };
};

export const editCard = (data, cardId) => {
  return { type: types.EDIT_CARD, payload: { data, cardId } };
};

export const deleteCard = (cardId, listId) => {
  return { type: types.DELETE_CARD, payload: { cardId, listId } };
};

export const moveList = args => {
  return { type: types.MOVE_LIST, payload: args };
};

export const moveCard = args => {
  return { type: types.MOVE_CARD, payload: args };
};
