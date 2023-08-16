import {createRouter, createWebHistory} from "vue-router";

import Listings from '../views/Listings.vue'
import About from '../views/About.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Profile from '../views/Profile.vue'

const routes = [
    {path: '/', name: 'Home', component: Listings},
    {path: '/post/:id', name: 'ListingDetails', component: () => import('../views/ListingDetails.vue')},
    {path: '/about', name: 'About', component: About},
    {path: '/signup', name: 'SignUp', component: SignUp},
    {path: '/profile', name: 'Profile', component: Profile},
    {path: '/login', name: 'LogIn', component: LogIn},
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