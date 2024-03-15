import { createStore } from "vuex";
import { v4 as uuid } from "uuid";
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
    allTodos: (state, getters, rootState) => {
      return [...state.todos];
    },
    completedTodos: (state, getters, rootState) => {
      return state.todos.filter((t) => t.completed);
    },
    pendingTodos: (state, getters, rootState) => {
      return state.todos.filter((t) => !t.completed);
    },
    getTodosByTab: (_, getters) => (tab) => {
      switch (tab) {
        case "all":
          return getters.allTodos;
        case "pending":
          return getters.pendingTodos;
        case "completed":
          return getters.completedTodos;

        default:
          return getters.allTodos;
      }
    },
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex((item) => item.id === id);
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    },
    newTask(state, text) {
      if (!text) return;
      state.todos.push({
        id: uuid(),
        completed: false,
        text,
      });
    },
  },
  actions: {},
  modules: {},
});
