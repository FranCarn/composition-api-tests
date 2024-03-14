import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        id: "1",
        text: "Vue is a progressive JavaScript framework",
        completed: true,
      },
      {
        id: "2",
        text: "Vue was created by Evan You",
        completed: false,
      },
      {
        id: "3",
        text: "Vue has a virtual DOM",
        completed: true,
      },
      {
        id: "4",
        text: "Vue is known for its simplicity and ease of integration",
        completed: false,
      },
      {
        id: "5",
        text: "Vue don't provides reactive data binding and composable view components",
        completed: false,
      },
    ],
  },
  getters: {
    allTodos(state, getters, rootState) {
      return [...state.todos];
    },
    completedTodos(state, getters, rootState) {
      return state.todos.filter((t) => t.completed);
    },
    pendingTodos(state, getters, rootState) {
      return state.todos.filter((t) => !t.completed);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
