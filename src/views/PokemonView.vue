<template>
  <h1>Pokemon #{{ $router.currentRoute.value.params.id }}</h1>

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
import { watch } from "vue";
import { onBeforeRouteLeave, useRoute } from "vue-router";
import usePokemon from "@/composables/usePokemon";
export default {
  setup() {
    const route = useRoute();

    const { errorMsg, isLoading, pokemon, searchPokemon } = usePokemon(
      route.params.id
    );

    onBeforeRouteLeave(() => {
      // if function return false stay in screen, return true continue to redirect
      return window.confirm("¿Sure to leave?");
    });

    // send first param (actual value) to the func
    // watch(() => id, searchPokemon)
    watch(
      () => route.params.id,
      (value, prev) => {
        searchPokemon(route.params.id);
      }
    );
    return { errorMsg, isLoading, pokemon };
  },
};
</script>

<style scoped>
h3 {
  text-transform: capitalize;
}
a {
  display: block;
  text-decoration: none;
  cursor: pointer;
  color: #000;
}
</style>
