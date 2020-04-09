export const state = () => ({
  tasks: [],
  groups: [],
});

export const mutations = {
  addTask(state, task) {
    state.tasks.push(task)
  },
  setCompleted(state, task) {
    const taskIndex = state.tasks.findIndex(t => t.id === task.id);
    state.tasks[taskIndex].completed = true;
  },
  undoCompleted(state, task) {
    const taskIndex = state.tasks.findIndex(t => t.id === task.id);
    state.tasks[taskIndex].completed = false;
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
  },
  saveCurrentGroup(state, {name, id}) {
    const tasks = state.tasks.map(task => Object.assign({}, task, { completed: false }));
    state.groups.push({ id, name, tasks });
  },
  addGroupToCurrentTasks(state) {
    const lastGroup = state.groups[state.groups.length - 1];
    const tasksIds = state.tasks.map(t => t.id);
    const filteredGroupTasks = lastGroup.tasks.filter(t => !tasksIds.includes(t.id));
    if (filteredGroupTasks.length) {
      state.tasks = state.tasks.concat(filteredGroupTasks.map(task => Object.assign({}, task, { completed: false })));
    }
  }
};
