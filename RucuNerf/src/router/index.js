import { createRouter, createWebHistory } from 'vue-router';
import CreateModelView from '../views/CreateModelView.vue';
import MyModelsView from '../views/MyModelsView.vue';
import ObjectView from '../views/ObjectView.vue';


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
    },
    {
      path: '/object',
      name: 'object',
      component: ObjectView
    }
  ]
})

export default router;
