<template>  
    <el-form 
      :model="dataProcessVal"
      label-width="auto"
      label-position="left">
      <el-form-item label="Available Models">
        <el-select v-model="val1">
          <el-option
            v-for="item in nerfs"
            :key="item.id"
            :label="item.id"
            :value="item.id"
          />
        </el-select>   
      </el-form-item>
      <el-form-item label="Export Method">
        <el-select v-model="val2">
          <el-option
            v-for="item in quality"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>   
      </el-form-item>
      <el-form-item>
        <el-button>Export</el-button>
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
} from 'element-plus'
import NerfApi from "../../api/NerfApi";

const quality = [
  {
    value: 0,
    label: 'Low'
  },
  {
    value: 1,
    label: 'High'
  },
]
const val1 = ref('');
const val2 = ref('');
const dataProcessVal = ref({});
const nerfs = ref({});
let loadingPopUp;

async function getAvailableNerfs() {
  try {
      loadingPopUp = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      const response = await NerfApi.getNerfModelsByUser();
      nerfs.value = response.data;
      
    } catch (error) {
      console.log(error)
    loadingPopUp.close();
    messagePopUp({
      message: 'Error al obtener modelos nerf',
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
  getAvailableNerfs()
})

</script>