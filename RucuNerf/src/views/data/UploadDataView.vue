<template>  
    <el-form 
      :model="dataVal"
      label-width="auto"
      label-position="left">
      <el-form-item label="Upload">
        <el-input type="file"/>    
      </el-form-item>
      <el-form-item label="Name">
        <el-input type="text"/>    
      </el-form-item>
      <el-form-item label="Description">
        <el-input type="textarea"/>    
      </el-form-item>
      <el-form-item>
        <el-button>
          Upload
        </el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
  } from 'element-plus'
  
  const dataVal = ref({});
  </script>