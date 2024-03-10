<template>
  <h1>Counter View</h1>
  <div>
    <button @click="decrease">-</button>
    <h2>{{ counter }}</h2>
    <button @click="increase">+</button>
  </div>
</template>

<script>
import useCounter from "@/composables/useCounter";
export default {
  name: "Counter",
  props: {},
  emits: [],
  setup() {
    //! WITHOUT COMPOSABLE !//

    // const counter = ref(5);

    // // const increase = () => {
    // //     counter.value++;
    // // };

    // // const decrease = () => {
    // //   counter.value--;
    // // };

    // return {
    //   counter,
    //   increase() {
    //     counter.value++;
    //   },
    //   decrease: () => counter.value--,
    // };

    /* Composable */
    const { counter, increase, decrease } = useCounter(125);

    return {
      counter,
      increase,
      decrease,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
button {
  background: none;
  border: 1px solid green;
  font-weight: 500;
  font-size: 20px;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
}
button:hover {
  background: rgba(0, 0, 0, 0.05);
}
h2 {
  font-weight: bold;
}
</style>
