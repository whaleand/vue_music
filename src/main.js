import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import './assets/css/normalize.css'
import './assets/css/index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
const app=createApp(App)
app.config.warnHandler=()=>null
app.config.globalProperties.$api=api;
app.use(Vant)
app.use(store).use(router).mount('#app')
