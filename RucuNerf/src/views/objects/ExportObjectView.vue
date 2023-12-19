<template>  
    <el-form 
      :model="dataProcessVal"
      label-width="auto"
      label-position="left">
      <el-form-item label="Available Models">
        <el-select>
        </el-select>   
      </el-form-item>
      <el-form-item label="Export Method">
        <el-select>
        </el-select>   
      </el-form-item>
      <el-form-item>
        <el-button>Export</el-button>
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