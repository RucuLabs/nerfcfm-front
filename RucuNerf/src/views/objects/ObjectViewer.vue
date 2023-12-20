<template>
    <el-card>
      <vue3dLoader
        filePath="http://127.0.0.1:8000/api/nerf-objects/1/obj/"
        mtlPath="./src/assets/obj/capy/material_0.mtl"
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
  import { ref, onBeforeMount } from "vue";
  import { vue3dLoader } from "vue-3d-loader";
  import {
    ElCard,
    ElLoading,
    ElMessageBox as messagePopUp,
  } from 'element-plus';
  import ObjectApi from "../../api/ObjectApi";
  const rotation = ref();
  let loadingPopUp;
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

  async function getObjectFiles() {
    try {
      loadingPopUp = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      const infoResponse = await ObjectApi.getNerfObjectObj(1);
      console.log(infoResponse);
    } catch (error) {
      console.log(error)
    loadingPopUp.close();
    messagePopUp({
      message: 'Error al obtener el borrador de informe',
      title: 'Error',
      type: 'error',
      center: true,
      cancelButtonText: 'Cerrar'
    });
  } finally {
    loadingPopUp.close();
  }
    
  }

  onBeforeMount(async () => {
    getObjectFiles()
  })

</script>