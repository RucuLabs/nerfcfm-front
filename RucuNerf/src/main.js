import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
// axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
