<template>
  <h1>Slots</h1>
  <button @click="isOpen = true">Open modal</button>
  <Modal v-if="isOpen" @on:close="toggleModal" title="modal title">
    <template v-slot:header>
      <div>
        <h2>Title</h2>
        <svg
          class="x-icon"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          @click="toggleModal"
        >
          <line
            x1="10"
            y1="10"
            x2="90"
            y2="90"
            stroke="black"
            stroke-width="10"
          />
          <line
            x1="90"
            y1="10"
            x2="10"
            y2="90"
            stroke="black"
            stroke-width="10"
          />
        </svg>
      </div>
    </template>
    <template v-slot:body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        delectus dolores saepe culpa, harum, atque libero, iusto a quidem
        tempora inventore consequatur! Rerum labore nemo vitae commodi,
        repellendus placeat doloribus?
      </p>
    </template>
    <template v-slot:footer>
      <button @click="toggleModal">Close</button>
    </template>
    <template v-slot:exposed="slotProps">{{ slotProps }}</template>
  </Modal>
</template>

<script>
import { ref } from "vue";
import Modal from "../components/Modal";
export default {
  components: {
    Modal,
  },
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      toggleModal: () => (isOpen.value = !isOpen.value),
    };
  },
};
</script>
<style scoped>
div {
  display: flex;
  justify-content: space-between;
  padding-inline: 20px;
}
.x-icon {
  width: 20px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.x-icon:hover {
  opacity: 0.7;
}
</style>
