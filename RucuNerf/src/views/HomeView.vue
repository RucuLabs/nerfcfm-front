<template>
  <el-card>
    <el-carousel 
      trigger="click"
      indicator-position="none"
      :autoplay="false"
      @change="onChange($event)">
      <el-carousel-item>
          <vue3dLoader
            filePath="./src/assets/obj/capy/mesh.obj"
            mtlPath="./src/assets/obj/capy/material_0.mtl"
            height="300"
            :cameraPosition="{ x: 0, y: 0, z: -3 }"
            :backgroundColor="0xffffff"
            :rotation="rotation"
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
    <template #footer>
      <div class="card-footer">
        <span>{{ objName }}</span>
        <el-button 
          type="danger" 
          :icon="CaretRight" 
          circle 
          @click="toggleRotate()"/>
      </div>
    </template>
  </el-card>
  
  
</template>
  
<script setup>
  import { ref } from "vue";
  import { vue3dLoader } from "vue-3d-loader";
  import {
    ElCard,
    ElCarousel,
    ElCarouselItem,
    ElButton,
    ElIcon,
  } from 'element-plus';
  import {
    CaretRight
  } from '@element-plus/icons-vue'
  const objNames = ['Capibara', 'Pato', 'Roco']
  const objName = ref('Capibara');
  const rotation = ref();
  const rotationSpeed = ref(0);
  const isRotating = ref(false);
  const audio = new Audio('./src/assets/music/freebird.mp3');
  audio.volume = 0.1;
  rotation.value = {
    x: -Math.PI / 2,
    y: 0,
    z: Math.PI / 2,
  };
  function onLoad() {
    rotate();
  };
  function onChange(event) {
    console.log(event);
    objName.value = objNames[event];
  };
  function rotate() {
    requestAnimationFrame(rotate);
    rotation.value.z -= rotationSpeed.value;
  };
  function toggleRotate() {
    if (isRotating.value) {
      rotationSpeed.value = 0;
      isRotating.value = !isRotating.value;
      audio.pause();
    }
    else {
      rotationSpeed.value = 0.05;
      isRotating.value = !isRotating.value;
      audio.play();
    }
  }
</script>

<style>
.card-footer {
display: flex;
justify-content: space-between;
align-items: center;
}
</style>