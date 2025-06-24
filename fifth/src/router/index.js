//引入路由
import {createRouter, createWebHashHistory} from "vue-router";
// import Nprogress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue'),
        meta: {title: '首页'},

    },

    {
        path: '/society',
        name: 'society',
        component: () => import('../views/society.vue'),
        meta: {title: '社会功能活动问卷'}
    },
    {
        path: '/mmse',
        name: 'mmse',
        component: () => import('../views/mmse.vue'),
        meta: {title: '汉密尔顿焦量虑表'}
    },
    {
        path: '/Scaletest',
        name: 'Scaletest',
        component: () => import('../views/Scaletest.vue'),
        meta: {title: '量表测试'}
    },
    {
        path: '/evaluation',
        name: 'evaluation',
        component: () => import('../views/evaluation.vue'),
        meta: {title: '认知测试'}
    },
    {
        path: '/otherForm',
        name: 'otherForm',
        component: () => import('../views/otherForm.vue'),
        meta: {title: '其他测试表'}

    },
    {
        path: '/surveyResult',
        name: 'surveyResult',
        component: () => import('../views/surveyResult.vue'),
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router