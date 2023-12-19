<template>  
  <el-form 
    :model="modelVal"
    label-width="auto"
    label-position="left">
    <el-form-item label="Available data">
      <el-select></el-select>   
    </el-form-item>
    Settings
    <el-form-item label="Quality">
      <el-select></el-select>
    </el-form-item>
    <el-form-item label="Speed">
      <el-select></el-select>
    </el-form-item>
    <el-form-item>
      <el-button>Submit</el-button>
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
  
  const modelVal = ref({});
</script>