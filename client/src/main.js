import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus, faUserEdit, faTrash, faUserPen, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(router, VueSweetalert2).mount('#app')
library.add(faUserPlus, faUserEdit, faTrash, faUserPen,faPen);
