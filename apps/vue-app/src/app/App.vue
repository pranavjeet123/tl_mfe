<template>
  <div id="app">
    <CoffeePlaceRanking />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CoffeePlaceRanking from './components/CoffeePlaceRanking.vue';

export default defineComponent({
  name: 'App',
  components: {
    CoffeePlaceRanking,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}
</style>
