<template>  
  <el-form 
    :model="modelVal"
    label-width="auto"
    label-position="left">
    <el-form-item label="Available data">
      <el-select v-model="val1">
        <el-option
          v-for="item in processedData"
          :key="item.id"
          :label="item.id"
          :value="item.id"
        />
      </el-select>      
    </el-form-item>
    Settings
    <el-form-item label="Quality">
      <el-select v-model="val2">
        <el-option
          v-for="item in quality"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Speed">
      <el-select v-model="val3">
        <el-option
          v-for="item in speed"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button>Submit</el-button>
    </el-form-item>
  </el-form>
  </template>
  
<script setup>
import { ref, onBeforeMount } from 'vue';
import {
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElButton,
  ElLoading,
  ElMessageBox as messagePopUp,
} from 'element-plus';
import ProcessedDataApi from "../../api/ProcessedDataApi.js";

const speed = [
  {
    value: 0,
    label: 'Slow'
  },
  {
    value: 1,
    label: 'Fast'
  },
]

const quality = [
  {
    value: 0,
    label: 'High'
  },
  {
    value: 1,
    label: 'Low'
  },
]
const val1 = ref('');
const val2 = ref('');
const val3 = ref('');
const modelVal = ref({});
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