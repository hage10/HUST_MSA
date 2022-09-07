import { createRouter, createWebHashHistory } from "vue-router"
import Login from './components/layout/TheLogin'
import TheContainer from '././components/layout/TheContainer'
import TheAssignment from './view/student/TheAssignment'
import StudentDetail from './view/student/StudentDetail'

const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/student",
        component: TheContainer,
        children:[
            {
                path: '/detail',
                component: StudentDetail
              },
              {
                path: '/assignment',
                component: TheAssignment
              },
        ]
    },
];
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})
export default router