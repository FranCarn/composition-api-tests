<template>
  <h1>Pokemon #{{ id }}</h1>

  <h1 v-if="!pokemon && !errorMsg">Loading...</h1>

  <h1 v-else-if="errorMsg">{{ errorMsg }}</h1>

  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img
      :src="pokemon.sprites.front_default"
      :alt="pokemon.name"
      width="150"
      height="150"
    />
    <router-link :to="{ name: 'search' }">Go back</router-link>
  </template>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import usePokemon from "@/composables/usePokemon";
export default {
  setup() {
    const { params } = useRoute();
    const { id } = params;
    const { errorMsg, isLoading, pokemon } = usePokemon(id);
    return { errorMsg, id, isLoading, pokemon };
  },
};
</script>

<style scoped>
h3 {
  text-transform: capitalize;
}
</style>
