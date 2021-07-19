const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        pending: [...state.pending, action.payload],
      };
    case "UPDATE_TASK_TO_COMPLETED":
      //Update task status
      const newTasks = state.tasks.filter(task => task.id !== action.payload.id);
      //Remove of Pending
      const newPendingArray = state.pending.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        ...state,
        tasks: [...newTasks, action.payload],
        pending: [...newPendingArray],
        completed: [...state.completed, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
