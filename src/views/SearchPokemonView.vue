<template>
  <h1>Search Pokemon: #{{ search }}</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Pokemon ID"
      autofocus
      v-model="search"
      ref="txtSearchId"
    />
  </form>
  <br />
  <span>Press enter to search</span>
</template>

<script>
import { onActivated, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const search = ref(0);
    const txtSearchId = ref(null);

    onActivated(() => {
      txtSearchId.value.select();
    });

    return {
      search,
      txtSearchId,
      onSubmit: () => {
        router.push({ name: "pokemon", params: { id: search.value } });
      },
    };
  },
};
</script>
