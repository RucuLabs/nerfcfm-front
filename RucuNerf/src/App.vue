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
}
</style>