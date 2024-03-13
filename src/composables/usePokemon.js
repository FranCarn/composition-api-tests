import { ref } from "vue";
import axios from "axios";
const usePokemon = (searchId) => {
  const pokemon = ref(null);
  const isLoading = ref(false);
  const errorMsg = ref(null);

  const searchPokemon = async (id) => {
    if (!id) return;
    isLoading.value = true;
    pokemon.value = null;
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      pokemon.value = data;
      errorMsg.value = null;
    } catch (error) {
      errorMsg.value = "Cannot get pokemon";
    } finally {
      isLoading.value = false;
    }
  };

  searchPokemon(searchId);

  return {
    errorMsg,
    isLoading,
    pokemon,

    searchPokemon,
  };
};

export default usePokemon;
