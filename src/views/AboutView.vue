<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">CHANGE</button>
  </div>
</template>

<script>
import {
  onActivated,
  onBeforeMount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
export default {
  setup() {
    console.log("setup");

    const title = ref("About Page");

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });

    onRenderTracked(() => {
      console.log("onRenderTracked");
    });

    onActivated(() => {
      console.log("onActivated");
    });

    onDeactivated(() => {
      console.log("onDeactivated");
    });
    return {
      title,
      changeTitle: () => {
        title.value = "New Title";
      },
    };
  },
};
</script>
