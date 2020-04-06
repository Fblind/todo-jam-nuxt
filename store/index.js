export const state = () => ({
  tasks: []
});

export const mutations = {
  addTask(state, task) {
    state.tasks.push(task)
  },
  setCompleted(state, task) {
    const taskIndex = state.tasks.findIndex(t => t.title === task.title);
    state.tasks[taskIndex].completed = true;
  },
  remove(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  setTitle(state, { title, task }) {
    console.log("holist")
    const taskIndex = state.tasks.findIndex(t => t.title === task.title);
    state.tasks[taskIndex].title = title;
  }
};
