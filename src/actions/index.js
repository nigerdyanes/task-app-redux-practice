export const addTask = (payload) => ({
  type: "ADD_TASK",
  payload,
});

export const updateTaskToCompleted = (payload) => ({
  type:"UPDATE_TASK_TO_COMPLETED",
  payload,
})