import mapKeys from 'lodash/mapKeys';
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
          content: 'Watch my favorite show',
          description: ''
        },
        'card-3': { id: 'card-3', content: 'Charge my phone', description: '' },
        'card-4': { id: 'card-4', content: 'Cook dinner', description: '' }
      },
      lists: {
        'lists-1': {
          id: 'lists-1',
          title: 'To do',
          cardIds: ['card-1', 'card-2', 'card-3', 'card-4']
        },
        'list-2': {
          id: 'list-2',
          title: 'In Progress',
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
        'card-5': { id: 'card-5', content: 'Take out the garbage' },
        'card-6': { id: 'card-6', content: 'Watch my favorite show' },
        'card-7': { id: 'card-7', content: 'Charge my phone' },
        'card-8': { id: 'card-8', content: 'Cook dinner' }
      },
      lists: {
        'lists-3': {
          id: 'lists-3',
          title: 'To do',
          cardIds: ['card-5', 'card-6', 'card-7', 'card-8']
        },
        'list-4': {
          id: 'list-4',
          title: 'In Progress',
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
          cardIds: []
        },
        'list-4': {
          id: 'list-4',
          title: 'In Progress',
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

export const getBoards = () => {
  const { boards } = initialData;
  return { type: types.GET_BOARDS, payload: boards };
};

export const createBoard = data => {
  const newBoard = {
    board: { id: `board-${Math.floor(Math.random() * 100 + 1)}`, title: data.title },
    cards: {},
    lists: {},
    listsOrder: []
  };
  initialData.boards = [...initialData.boards, newBoard];
  return { type: types.CREATE_BOARD, payload: newBoard };
};

export const editBoard = (data, id) => {
  let initBoards = mapKeys(initialData.boards, 'board.id');
  const editedBoard = initBoards[id];
  editedBoard.board.title = data.title;
  initBoards[id] = editedBoard;
  initialData.boards = Object.values(initBoards);
  return { type: types.EDIT_BOARD, payload: editedBoard };
};
