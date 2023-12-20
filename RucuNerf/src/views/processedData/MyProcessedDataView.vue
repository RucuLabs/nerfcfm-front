<template>
  <el-table
    :data="processedData"
    :table-layout="auto"
    border>
    <el-table-column 
      prop="id"
      label="ID"
      /> 
    <el-table-column 
      prop="data"
      label="Data"
      />
    <el-table-column 
      prop="status"
      label="Status"
      />  
    <el-table-column 
      prop="start_date"
      label="Start date"/>
    <el-table-column 
      prop="end_date"
      label="End date"/>
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
import ProcessedDataApi from "../../api/ProcessedDataApi.js";

const processedData = ref({});
let loadingPopUp;
async function getAvailableProcessedData() {
  try {
      loadingPopUp = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      const response = await ProcessedDataApi.getProcessedDataByUser();
      processedData.value = response.data;
      
    } catch (error) {
      console.log(error)
    loadingPopUp.close();
    messagePopUp({
      message: 'Error al obtener data procesada',
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
  getAvailableProcessedData()
})
</script>