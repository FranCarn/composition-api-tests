<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <div>
      <h3>{{ ironman }}</h3>
      <h3>Is Alive: {{ ironmanIsAlive }}</h3>
    </div>
    <div>
      <h3>{{ hulk }}</h3>
      <h3>Is Alive: {{ hulkIsAlive }}</h3>
    </div>
    <button @click="changeIronman">Change Ironman</button>
    <button @click="changeHulk">Change Hulk</button>
    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    const ironman = ref({ name: "Tony", age: 50 });
    const hulk = reactive({ name: "Bruce", age: 40 });
    const ironmanIsAlive = reactive(false);
    const hulkIsAlive = ref(true);

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive;
      // ironmanIsAlive = !ironmanIsAlive;
    };

    return {
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,
      changeIronman: () => {
        ironman.value.name = "Tony Stark";
        ironman.value.age = 55;
      },
      changeHulk: () => {
        hulk.name = "Bruce Banner";
        hulk.age = 45;
      },
      changeStatus,
    };
  },
};
</script>
