<template>
  <el-table>
    <el-table-column label="Name"/>
    <el-table-column label="Description"/>
    <el-table-column label="Start date"/>
    <el-table-column label="End date"/>
    <el-table-column label="Processing time"/>
    <el-table-column label="Status"/>
  </el-table>
</template>

<script setup>
import {
  ElTable,
  ElTableColumn,
} from 'element-plus';
</script>