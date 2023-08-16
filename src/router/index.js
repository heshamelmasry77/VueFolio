import {createRouter, createWebHistory} from "vue-router";

import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {
        path: '/:pathMatch(.*)*', // newer version
        name: 'NotFound',
        component: () => import('../views/NotFound.vue') // dynamic import for performance
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router