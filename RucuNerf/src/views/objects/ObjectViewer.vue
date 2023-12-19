<template>
    <el-card>
      <vue3dLoader
        filePath="./src/assets/obj/mesh.obj"
        mtlPath="./src/assets/obj/material_0.mtl"
        height="500"
        :cameraPosition="{ x: 0, y: 0, z: -3 }"
        :backgroundColor="0xffffff"
        :rotation="rotation"
        @load="onLoad()"
      ></vue3dLoader>
      ROCO OBJ
    </el-card>
  </template>
  
  <script setup>
   import { ref } from "vue";
    import { vue3dLoader } from "vue-3d-loader";
    import {
      ElCard,
    } from 'element-plus'
    const rotation = ref();
    rotation.value = {
      x: -Math.PI / 2,
      y: 0,
      z: 0,
    };
    function onLoad() {
      rotate();
    }
    function rotate() {
      requestAnimationFrame(rotate);
      rotation.value.z -= 0.002;
    }
  </script>