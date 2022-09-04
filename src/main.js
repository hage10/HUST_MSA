import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import StudentDetail from './view/student/StudentDetail'
import TheAssignment from './view/student/TheAssignment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import mitt from "mitt";
const emitter = mitt();

const msarouters = [
    { path: '/infostudent', component: StudentDetail},
    { path: '/assignment' , component: TheAssignment},
]
// app.component("ThePopup", Popup);

const router = createRouter({
    history: createWebHistory(),
    routes: msarouters,
})

library.add(fas, fab, far)
const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.globalProperties.emitter = emitter;
app.mount('#app')  