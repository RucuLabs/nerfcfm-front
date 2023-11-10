import { createRouter, createWebHistory } from 'vue-router'
import DummyView from '../views/DummyView.vue'
import CreateModelView from '../views/CreateModelView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dummy',
      component: DummyView
    },
    {
      path: '/createModel',
      name: 'createModel',
      component: CreateModelView
    }
  ]
})

export default router
