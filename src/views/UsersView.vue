<template>
  <h2 v-if="isLoading">Loading...</h2>
  <h2 v-else>Users</h2>
  <h5 v-if="errorMsg">{{ errorMsg }}</h5>

  <div v-if="users.length">
    <user-list :users="users" v-slot="{ user }">
      <div class="avatarContainer">
        <h5>{{ user.last_name }}, {{ user.first_name }}</h5>
        <img :alt="user.first_name" :src="user.avatar" />
      </div>
      <span>{{ user.email }}</span>
    </user-list>
  </div>
  <button @click="prevPage">Back</button>
  <span>Page {{ currentPage }}</span>
  <button @click="nextPage">Next</button>
</template>

<script>
import useUsers from "@/composables/useUsers";
import UserList from "@/components/UserList";
export default {
  components: {
    UserList,
  },
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
  width: 300px;
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
.avatarContainer {
  display: flex;
  align-items: center;
  gap: 15px;
}
img {
  border-radius: 100%;
  width: 45px;
  height: 45px;
}
span {
  padding: 10px;
  margin-bottom: 30px;
  display: block;
}
</style>
