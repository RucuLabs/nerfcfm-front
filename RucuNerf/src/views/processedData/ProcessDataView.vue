<template>  
  <el-form 
    :model="dataProcessVal"
    label-width="auto"
    label-position="left">
    <el-form-item label="Available Data">
      <el-select v-model="value1">
        <el-option
          v-for="item in data"
          :key="item.id"
          :label="item.id"
          :value="item.id"
        />
      </el-select>   
    </el-form-item>
    <el-form-item label="Sampling">
      <el-select v-model="value2">
        <el-option
          v-for="item in sampling"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>   
    </el-form-item>
    <el-form-item>
      <el-button>Process</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import {
  ElForm,
  ElFormItem,
  ElSelect,
  ElButton,
  ElOption,
  ElLoading,
  ElMessageBox as messagePopUp,
} from 'element-plus'
import DataApi from "../../api/DataApi";

const sampling = [
  {
    value: 0,
    label: 'Default'
  },
  {
    value: 1,
    label: 'Custom'
  },
]
const value1 = ref('');
const value2 = ref('');
const dataProcessVal = ref({});
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