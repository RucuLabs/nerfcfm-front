import { createRouter, createWebHistory } from 'vue-router';
import MyDataView from '../views/data/MyDataView.vue'
import UploadDataView from '../views/data/UploadDataView.vue'
import ProcessDataView from '../views/processedData/ProcessDataView.vue'
import MyProcessedDataView from '../views/processedData/MyProcessedDataView.vue'
import MyModelsView from '../views/models/MyModelsView.vue'
import TrainModelView from '../views/models/TrainModelView.vue'
import MyObjectsView from '../views/objects/MyObjectsView.vue'
import ExportObjectView from '../views/objects/ExportObjectView.vue'
import ObjectViewer from '../views/objects/ObjectViewer.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MyModelsView
    },
    {
      path: '/uploadData',
      name: 'UploadData',
      component: UploadDataView
    },
    {
      path: '/myData',
      name: 'MyData',
      component: MyDataView
    },
    {
      path: '/processData',
      name: 'ProcessData',
      component: ProcessDataView
    },
    {
      path: '/myProcessedData',
      name: 'MyProcessedData',
      component: MyProcessedDataView
    },
    {
      path: '/myModels',
      name: 'myModel',
      component: MyModelsView
    },
    {
      path: '/trainModel',
      name: 'TrainModel',
      component: TrainModelView
    },
    {
      path: '/myObjects',
      name: 'MyObjects',
      component: MyObjectsView
    },
    {
      path: '/exportObject',
      name: 'ExportObject',
      component: ExportObjectView
    },
    {
      path: '/objectViewer',
      name: 'ObjectViewe',
      component: ObjectViewer
    },
  ]
})

export default router;
