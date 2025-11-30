<template>
  <div class="vue-app-container">
    <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">{{ message }}</h2>
      <p class="text-lg mb-4">This is a Vue 3 Microfrontend!</p>
      <div class="bg-white text-gray-800 p-4 rounded mb-4">
        <p class="text-xl font-semibold">Counter: {{ count }}</p>
      </div>
      <button 
        @click="increment"
        class="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-blue-100 transition duration-200 mr-2"
      >
        Increment
      </button>
      <button 
        @click="decrement"
        class="bg-white text-red-600 font-bold py-2 px-4 rounded hover:bg-red-100 transition duration-200"
      >
        Decrement
      </button>
      <div class="mt-4 text-sm">
        <p>✨ Powered by Vue 3 + Module Federation</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const message = ref('Hello from Vue Microfrontend!');
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    const decrement = () => {
      count.value--;
    };

    return {
      message,
      count,
      increment,
      decrement,
    };
  },
});
</script>

<style scoped>
.vue-app-container {
  width: 100%;
}
</style>
