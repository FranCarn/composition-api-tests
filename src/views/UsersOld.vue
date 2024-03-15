<template>
  <h2 v-if="isLoading">Loading...</h2>
  <h2 v-else>Users Old</h2>
  <h5 v-if="errorMsg">{{ errorMsg }}</h5>

  <div v-if="users.length">
    <ul>
      <li v-for="{ first_name, last_name, id, email } in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        <h5>{{ email }}</h5>
      </li>
    </ul>
  </div>
  <button @click="prevPage">Back</button>
  <span>Page {{ currentPage }}</span>
  <button @click="nextPage">Next</button>
</template>

<script>
import useUsers from "@/composables/useUsers";

export default {
  setup() {
    const {
      currentPage,
      errorMsg,
      isLoading,
      users,

      nextPage,
      prevPage,
    } = useUsers();

    return {
      currentPage,
      errorMsg,
      isLoading,
      users,

      nextPage,
      prevPage,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}
h5 {
  text-align: center;
}
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 200px;
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
button {
  margin: 20px;
  border: 1px solid black;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
}
</style>
