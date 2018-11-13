const initialData = {
  boards: {
    "board-1": {
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
    },
    "board-2": {
      board: {
        id: "board-2",
        title: "My second board"
      },
      cards: {
        "card-5": { id: "card-5", content: "Take out the garbage" },
        "card-6": { id: "card-6", content: "Watch my favorite show" },
        "card-7": { id: "card-7", content: "Charge my phone" },
        "card-8": { id: "card-8", content: "Cook dinner" }
      },
      lists: {
        "lists-3": {
          id: "lists-3",
          title: "To do",
          cardIds: ["card-1", "card-2", "card-3", "card-4"]
        },
        "list-4": {
          id: "list-4",
          title: "In Progress",
          cardIds: []
        }
      },
      listsOrder: ["lists-3", "list-4"]
    },
    boardIds: ["board-1", "board-2"]
  }
};
export default initialData;
