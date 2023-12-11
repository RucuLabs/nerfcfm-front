<template >
  <el-container>
    <el-header>
      <span v-on:click="collapseSidebar()">
        <el-icon><Menu /></el-icon>
      </span>
    </el-header>
    <el-container>
      <el-drawer
        v-model="isCollapse"
        class="drawer"
        direction="ltr"
        size="50%">
        <el-menu>
          <RouterLink to="/createModel">
            <el-menu-item index="1">
              <template #title>Create Object</template>  
            </el-menu-item>
          </RouterLink>
          <RouterLink to="/myModels">
            <el-menu-item index="2">
              <template #title>My Objects</template>  
            </el-menu-item>
          </RouterLink>
        </el-menu>
      </el-drawer>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import {
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElMenuItem,
  ElIcon,
  ElDrawer,
} from 'element-plus';
import {
  Menu
} from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
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
    width: device-width;
}

.drawer {
  --el-drawer-padding-primary: 0px;
}

.el-drawer__header {
  padding: 20px;
}
</style>