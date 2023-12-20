<template>
  <el-table
    :data="data"
    :table-layout="auto"
    border>
    <el-table-column 
      prop="id"
      label="ID"
      />
    <el-table-column 
      prop="name"
      label="Name"
      />
    <el-table-column 
      prop="upload_date"
      label="Date"/>
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
import DataApi from "../../api/DataApi";

const data = ref({});
let loadingPopUp;
async function getAvailableData() {
  try {
      loadingPopUp = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      const response = await DataApi.getDataByUser();
      data.value = response.data;
      
    } catch (error) {
      console.log(error)
    loadingPopUp.close();
    messagePopUp({
      message: 'Error al obtener data',
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
  getAvailableData()
})

</script>