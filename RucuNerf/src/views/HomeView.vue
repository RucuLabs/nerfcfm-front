<template>
    <el-card>
      <el-carousel>
        <el-carousel-item>
          <vue3dLoader
            filePath="./src/assets/obj/capy/mesh.obj"
            mtlPath="./src/assets/obj/capy/material_0.mtl"
            height="300"
            :cameraPosition="{ x: 0, y: 0, z: -3 }"
            :backgroundColor="0xffffff"
            :rotation="rotation"
            @load="onLoad()"
          ></vue3dLoader>
        </el-carousel-item>
        <el-carousel-item>
          <vue3dLoader
            filePath="./src/assets/obj/pato/mesh.obj"
            mtlPath="./src/assets/obj/pato/material_0.mtl"
            height="300"
            :cameraPosition="{ x: 0, y: 0, z: -3 }"
            :backgroundColor="0xffffff"
            :rotation="rotation"
            @load="onLoad()"
          ></vue3dLoader>
        </el-carousel-item>
        <el-carousel-item>
          <vue3dLoader
            filePath="./src/assets/obj/roco/mesh.obj"
            mtlPath="./src/assets/obj/roco/material_0.mtl"
            height="300"
            :cameraPosition="{ x: 0, y: 0, z: -3 }"
            :backgroundColor="0xffffff"
            :rotation="rotation"
            @load="onLoad()"
          ></vue3dLoader>
        </el-carousel-item>
      </el-carousel>
      
      
      CapiBaraa
    </el-card>
    
    
  </template>
  
  <script setup>
   import { ref } from "vue";
    import { vue3dLoader } from "vue-3d-loader";
    import {
      ElCard,
      ElCarousel,
      ElCarouselItem,
    } from 'element-plus'
    const rotation = ref();
    rotation.value = {
      x: -Math.PI / 2,
      y: 0,
      z: Math.PI / 2,
    };
    function onLoad() {
      rotate();
    }
    function rotate() {
      requestAnimationFrame(rotate);
      rotation.value.z -= 0.01;
    }
  </script>