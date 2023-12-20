<template>
    <el-table
    :data="objects"
    :table-layout="auto"
    border>
    <el-table-column 
      prop="id"
      label="ID"
      />
    <el-table-column 
      prop="status"
      label="Status"
      />
    <el-table-column 
      prop="nerf_model"
      label="Nerf model"
      />
    <el-table-column 
      prop="export_method"
      label="Export method"
      />
    <el-table-column 
      prop="start_date"
      label="Start date"
      />
    <el-table-column 
      prop="end_date"
      label="End date"
      />
  </el-table>
  </template>
  
<script setup>
import { ref, onBeforeMount } from "vue";
import {
  ElTable,
  ElTableColumn,
  ElLoading,
  ElMessageBox as messagePopUp,
} from 'element-plus';
import ObjectApi from "../../api/ObjectApi";

const objects = ref({});
let loadingPopUp;
async function getAvailableObjects() {
  try {
      loadingPopUp = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      const response = await ObjectApi.getNerfObjectsByUser();
      objects.value = response.data;
      
    } catch (error) {
      console.log(error)
    loadingPopUp.close();
    messagePopUp({
      message: 'Error al obtener objetos',
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
  getAvailableObjects()
});
</script>