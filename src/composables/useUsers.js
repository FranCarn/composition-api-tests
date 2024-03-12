import { ref } from "vue";
import axios from "axios";

const useUsers = () => {
  const users = ref([]);
  const isLoading = ref(true);
  const currentPage = ref(1);
  const errorMsg = ref("");

  const getUsers = async (page = 1) => {
    if (!page) return;
    isLoading.value = true;
    try {
      const { data } = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );

      if (data.data.length) {
        users.value = data.data;
        currentPage.value = data.page;
      } else if (currentPage.value) {
        errorMsg.value = "No more users.";
      }
    } catch (error) {
    } finally {
      isLoading.value = false;
    }
  };

  getUsers();
  return {
    currentPage,
    errorMsg,
    isLoading,
    users,

    nextPage: () => getUsers(currentPage.value + 1),
    prevPage: () => getUsers(currentPage.value - 1),
  };
};

export default useUsers;
