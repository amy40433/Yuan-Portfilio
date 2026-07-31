import { createRouter, createWebHistory } from 'vue-router'
import Home from './screens/Home.vue'
import About from './screens/About.vue'
import Portfolio from './screens/Portfolio.vue'
import Contacts from './screens/Contacts.vue'
import ShopView from './screens/ShopView.vue'
import NotFound from './screens/NotFoundScreen.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home 
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/shopView',
        name: 'ShopView',
        component: ShopView
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
    //     {
    //     path: '/contacts',
    //     name: 'Contacts',
    //     component: () => import('./screens/AboutOne.vue')
    // },

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
