<script setup>
import { RouterView } from 'vue-router';
import MainView from './views/MainView.vue';
</script>

<template>
  <MainView>
    <RouterView />
  </MainView>
</template>


<style>
#app {
  padding: 0;
  height: 100vh;
  width: 100vw;
  max-width: inherit;
  margin: 0;
}
</style>