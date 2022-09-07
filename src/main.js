import { createApp } from 'vue'
import App from './App.vue'
// import { createRouter, createWebHistory } from 'vue-router'
// import StudentDetail from './view/student/StudentDetail'
// import TheContainer from '././components/layout/TheContainer'
// import TheAssignment from './view/student/TheAssignment'
// import TheLogin from './components/layout/TheLogin'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import mitt from "mitt";
const emitter = mitt();

// const msarouters = [
//     { path: '/home', component: TheLogin},
//     { path: '/home /student', component: TheContainer},
//     // { path: '/teacher', component: TheLogin},
    
//     { path: '/infostudent', component: StudentDetail},
//     { path: '/assignment' , component: TheAssignment},
// ]
// // app.component("ThePopup", Popup);

// const router = createRouter({
//     history: createWebHistory(),
//     routes: msarouters,
// })

library.add(fas, fab, far)
const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.globalProperties.emitter = emitter;
app.mount('#app')  