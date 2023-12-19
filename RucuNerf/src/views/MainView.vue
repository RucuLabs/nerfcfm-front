<template >
  <el-container>
    <el-header>
      <span v-on:click="collapseSidebar()">
        <el-icon><Menu /></el-icon>
      </span> RucuNerf
    </el-header>
    
    <el-drawer
      v-model="isCollapse"
      class="drawer"
      direction="ltr"
      size="50%">
      <el-menu>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Data</span>
          </template>
          <RouterLink to="/myData">
            <el-menu-item index="1-1">My Data</el-menu-item>
          </RouterLink>
          <RouterLink to="/uploadData">
            <el-menu-item index="1-2">Upload Data</el-menu-item>
          </RouterLink>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Processed Data</span>
          </template>
          <RouterLink to="/myProcessedData">
            <el-menu-item index="2-1">My Processed Data</el-menu-item>
          </RouterLink>
          <RouterLink to="/processData">
            <el-menu-item index="2-2">Process Data</el-menu-item>
          </RouterLink>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Models</span>
          </template>
          <RouterLink to="/myModels">
            <el-menu-item index="3-1">My Models</el-menu-item>
          </RouterLink>
          <RouterLink to="/trainModel">
            <el-menu-item index="3-2">Train Model</el-menu-item>
          </RouterLink>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Objects</span>
          </template>
          <RouterLink to="/myObjects">
            <el-menu-item index="4-1">My Objects</el-menu-item>
          </RouterLink>
          <RouterLink to="/exportObject">
            <el-menu-item index="4-2">Export Objects</el-menu-item>
          </RouterLink>
        </el-sub-menu>
        
      </el-menu>
    </el-drawer>
    <el-main>
      <slot />
    </el-main>
    
  </el-container>
</template>

<script setup>
import {
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElIcon,
  ElDrawer,
} from 'element-plus';
import {
  Menu
} from '@element-plus/icons-vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isCollapse = ref(false);
function collapseSidebar() {
  isCollapse.value = !isCollapse.value;
}
</script>

<style>
.el-header {
    background-color: #ffffff;
    color: #333;
    line-height: 62px;
    width: inherit;
}

.el-container {
  width: inherit;
}

.drawer {
  --el-drawer-padding-primary: 0px;
}

.el-drawer__header {
  padding: 20px;
}
</style>