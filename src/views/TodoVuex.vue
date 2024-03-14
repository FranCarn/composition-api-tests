<template>
  <h1>TO-DO</h1>
  <h4>Tasks pending: {{ pending.length }}</h4>
  <hr />
  <button>All</button>
  <button>Pending</button>
  <button>Completed</button>
  <div v-if="all.length">
    <ul>
      <li
        v-for="{ text, id, completed } in all"
        :key="id"
        :class="{ completed: completed }"
      >
        {{ text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const { getters, commit, dispatch } = useStore();

    return {
      pending: computed(() => getters["pendingTodos"]),
      completed: computed(() => getters["completedTodos"]),
      all: computed(() => getters["allTodos"]),
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
