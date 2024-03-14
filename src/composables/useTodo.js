import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodo = () => {
  const { getters, commit } = useStore();
  const currentTab = ref("all");

  return {
    currentTab,

    pending: computed(() => getters["pendingTodos"]),
    completed: computed(() => getters["completedTodos"]),
    all: computed(() => getters["allTodos"]),
    getTodosByTab: computed(() => getters["getTodosByTab"](currentTab.value)),
    toggleTodo: (id) => commit("toggleTodo", id),
  };
};

export default useTodo;
