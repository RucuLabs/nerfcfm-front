<template>
  <el-card>
    <vue3dLoader
      filePath="./src/assets/objects/cat.obj"
      height="200"
      :cameraPosition="{ x: -0, y: -100, z: 0 }"
      :backgroundColor="0xff00ff"
    ></vue3dLoader>
    Garfield
  </el-card>
</template>

<script setup>
 import { ref } from "vue";
  import { vue3dLoader } from "vue-3d-loader";
  import {
    ElCard,
  } from 'element-plus'
</script>