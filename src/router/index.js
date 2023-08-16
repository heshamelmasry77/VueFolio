import {createRouter, createWebHistory} from "vue-router";

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/post/:id', name: 'ListingDetails', component: () => import('../views/ListingDetails.vue')},
    {path: '/about', name: 'About', component: About},
    {path: '/signup', name: 'About', component: SignUp},
    {path: '/login', name: 'About', component: LogIn},
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