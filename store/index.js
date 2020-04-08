export const state = () => ({
  tasks: [],
});

export const mutations = {
  addTask(state, task) {
    state.tasks.push(task)
  },
  setCompleted(state, task) {
    const taskIndex = state.tasks.findIndex(t => t.id === task.id);
    state.tasks[taskIndex].completed = true;
  },
  remove(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  setTitle(state, { title, task }) {
    const taskIndex = state.tasks.findIndex(t => t.id === task.id);
    state.tasks[taskIndex].title = title;
  },
  resetAll(state) {
    state.tasks = [];
  }
};
