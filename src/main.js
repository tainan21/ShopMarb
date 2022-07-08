import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './script'
import router from './router'
import '@/assets/css/style.scss';
createApp(App).use(router).mount('#app')
