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
        @dblclick="toggleTodo(id)"
      >
        {{ text }}
      </li>
    </ul>
  </div>
  <button @click="toggleModal">New Task</button>

  <modal v-if="isOpen" @on:close="toggleModal">
    <template v-slot:header>
      <h4>New Task</h4>
    </template>
    <template v-slot:body>
      <form @submit.prevent="saveNewTask">
        <input v-model="newTaskInput" placeholder="New Task..." autofocus />
      </form>
    </template>
  </modal>
</template>

<script>
import useTodo from "@/composables/useTodo";
import Modal from "@/components/Modal";
import { ref } from "vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const { currentTab, pending, getTodosByTab, toggleTodo, newTask } =
      useTodo();
    const isOpen = ref(false);
    const newTaskInput = ref("");
    const toggleModal = () => {
      isOpen.value = !isOpen.value;
      newTaskInput.value = "";
    };

    const saveNewTask = () => {
      newTask(newTaskInput.value);
      toggleModal();
    };

    return {
      currentTab,
      getTodosByTab,
      isOpen,
      newTaskInput,
      pending,

      saveNewTask,
      toggleModal,
      toggleTodo,
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
input {
  width: 90%;
  resize: none;
  outline: none;
  padding-bottom: 50%;
  margin-bottom: 10px;
}
input:focus {
  outline: none;
}
</style>
