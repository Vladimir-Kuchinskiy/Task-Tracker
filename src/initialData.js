const initialData = {
  board: {
    id: "board-1",
    title: "My first board"
  },
  cards: {
    "card-1": { id: "card-1", content: "Take out the garbage" },
    "card-2": { id: "card-2", content: "Watch my favorite show" },
    "card-3": { id: "card-3", content: "Charge my phone" },
    "card-4": { id: "card-4", content: "Cook dinner" }
  },
  lists: {
    "lists-1": {
      id: "lists-1",
      title: "To do",
      cardIds: ["card-1", "card-2", "card-3", "card-4"]
    },
    "list-2": {
      id: "list-2",
      title: "In Progress",
      cardIds: []
    }
  },
  listsOrder: ["lists-1", "list-2"]
};
export default initialData;
