import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';      
import Portfolio from '../pages/Portfolio.vue';  
import AboutMe from '../pages/AboutMe.vue';     

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },
    {
        path: '/about',
        name: 'AboutMe',
        component: AboutMe,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
