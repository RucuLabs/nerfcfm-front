<template >
  <el-container>
    <el-header>
      <div class="left-icon">
        <el-icon 
          :size="20"
          v-on:click="collapseSidebar()">
          <Menu />
        </el-icon>
      </div>
      
      <div class="center-icon">
        <el-icon :size="50"><Cloud /></el-icon>RucuNeRF
      </div>
    </el-header>
    
    <el-drawer
      v-model="isCollapse"
      class="drawer"
      direction="ltr"
      size="50%">
      <el-menu>
        <RouterLink to="/">
          <el-menu-item index="0">
            <el-icon><Home /></el-icon>
          </el-menu-item>
        </RouterLink>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Media /></el-icon>
            <span>Data</span>
          </template>
          <RouterLink to="/myData">
            <el-menu-item index="1-1">
              <el-icon><List /></el-icon>
              My Data
            </el-menu-item>
          </RouterLink>
          <RouterLink to="/uploadData">
            <el-menu-item index="1-2">
              <el-icon><Upload /></el-icon>
              Upload Data
            </el-menu-item>
          </RouterLink>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Movie /></el-icon>
            <span>Processed Data</span>
          </template>
          <RouterLink to="/myProcessedData">
            <el-menu-item index="2-1">
              <el-icon><List /></el-icon>
              Ready Data
            </el-menu-item>
          </RouterLink>
          <RouterLink to="/processData">
            <el-menu-item index="2-2">
              <el-icon><Build /></el-icon>
              Process Data
            </el-menu-item>
          </RouterLink>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Ar /></el-icon>
            <span>Models</span>
          </template>
          <RouterLink to="/myModels">
            <el-menu-item index="3-1">
              <el-icon><List /></el-icon>
              My Models
            </el-menu-item>
          </RouterLink>
          <RouterLink to="/trainModel">
            <el-menu-item index="3-2">
              <el-icon><Train /></el-icon>
              Train Model
            </el-menu-item>
          </RouterLink>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><TresDe /></el-icon>
            <span>Objects</span>
          </template>
          <RouterLink to="/myObjects">
            <el-menu-item index="4-1">
              <el-icon><List /></el-icon>
              My Objects
            </el-menu-item>
          </RouterLink>
          <RouterLink to="/exportObject">
            <el-menu-item index="4-2">
              <el-icon><Download /></el-icon>
              Export Objects
            </el-menu-item>
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

import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Cloud from '../components/icons/cloud.vue';
import Menu from '../components/icons/menu.vue';
import Ar from '../components/icons/ar.vue';
import Home from '../components/icons/home.vue';
import TresDe from '../components/icons/3d.vue';
import Media from '../components/icons/media.vue';
import Movie from '../components/icons/movie.vue';
import Upload from '../components/icons/upload.vue';
import Train from '../components/icons/train.vue';
import Build from '../components/icons/build.vue';
import Download from '../components/icons/download.vue';
import List from '../components/icons/list.vue';

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
    position: relative;
    justify-content: space-between;
    align-items: center;
    display: flex;
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

.left-icon {
  margin-right: 10px;
}

.center-icon {
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
}

</style>