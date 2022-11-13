import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'sweetalert2';

import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

createApp(App).use(router).use(router, VueSweetalert2).mount('#app')
