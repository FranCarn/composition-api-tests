<template>
  <h1>TO-DO</h1>
  <h4>Tasks pending: {{ pending.length }}</h4>
  <hr />
  <button @click="currentTab = 'all'" :class="{ active: currentTab === 'all' }">
    All
  </button>
  <button
    @click="currentTab = 'pending'"
    :class="{ active: currentTab === 'pending' }"
  >
    Pending
  </button>
  <button
    @click="currentTab = 'completed'"
    :class="{ active: currentTab === 'completed' }"
  >
    Completed
  </button>
  <div v-if="getTodosByTab.length">
    <ul>
      <li
        v-for="{ text, id, completed } in getTodosByTab"
        :key="id"
        :class="{ completed: completed }"
      >
        {{ text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const { getters, commit, dispatch } = useStore();
    const currentTab = ref("all");

    return {
      currentTab,

      pending: computed(() => getters["pendingTodos"]),
      completed: computed(() => getters["completedTodos"]),
      all: computed(() => getters["allTodos"]),
      getTodosByTab: computed(() => getters["getTodosByTab"](currentTab.value)),
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: "center";
}
button {
  margin-inline: 10px;
  width: 85px;
  cursor: pointer;
}
ul {
  width: 300px;
  text-align: left;
}
li {
  cursor: pointer;
}
.active {
  background: #2c3e50;
  color: #ffffff;
}
.completed {
  text-decoration: line-through;
}
</style>
