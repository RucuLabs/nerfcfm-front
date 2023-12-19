<script setup>
import { RouterView } from 'vue-router';
import Layout from './views/Layout.vue';
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
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