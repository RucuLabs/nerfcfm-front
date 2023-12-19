<template>  
  <el-form 
    :model="dataProcessVal"
    label-width="auto"
    label-position="left">
    <el-form-item label="Available Data">
      <el-select>
      </el-select>   
    </el-form-item>
    <el-form-item>
      <el-button>Process</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue';
import {
  ElForm,
  ElFormItem,
  ElSelect,
  ElButton
} from 'element-plus'

const dataProcessVal = ref({});
</script>