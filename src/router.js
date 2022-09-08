import { createRouter, createWebHashHistory } from "vue-router"
import Login from './components/layout/TheLogin'
import StudentContainer from './view/student/StudentContainer'
import TheAssignment from './view/student/TheAssignment'
import StudentDetail from './view/student/StudentDetail'

import TeacherContainer from './view/teacher/TeacherContainer'
import TeacherDetail from './view/teacher/TeacherDetail'
import ClassManage from './view/teacher/ClassManage'
import TeacherAssignment from './view/teacher/TeacherAssignment'

import AdminContainer from './view/admin/AdminContainer'
import AccountManage from './view/admin/AccountManage'

const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/student",
        component: StudentContainer,
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
    {
        path: "/teacher",
        component: TeacherContainer,
        children:[
            {
                path: '/detailteacher',
                component: TeacherDetail
              },
              {
                path: '/assignmentteacher',
                component: TeacherAssignment
              },
              {
                path: '/classmanage',
                component: ClassManage
              },
        ]
    },
    {
        path: "/admin",
        component: AdminContainer,
        children:[
            {
                path: '/accountmanage',
                component: AccountManage
              },
        ]
    },

];
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})
export default router