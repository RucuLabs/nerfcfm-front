import { createRouter, createWebHistory } from 'vue-router';
import CreateModelView from '../views/CreateModelView.vue';
import MyModelsView from '../views/MyModelsView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/createModel',
      name: 'createModel',
      component: CreateModelView
    },
    {
      path: '/myModels',
      name: 'myModel',
      component: MyModelsView
    }
  ]
})

export default router;
