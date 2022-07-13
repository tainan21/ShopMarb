import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './script'
import router from './router'
import '@/assets/css/style.scss';
createApp(App).use(router).mount('#app')

import Vue from 'vue'
  import Vuesax from 'vuesax'

  import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax, {
    // options here
  })