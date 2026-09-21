import {createRouter, createWebHistory} from "vue-router";
import Home from "./shared/presentation/views/home.vue";
import About from "./shared/presentation/views/about.vue";

const pageNotFound = () => import('./shared/presentation/views/page-not-found.vue');

const routes = [
    { path:'/home', name: 'home', component: Home, meta: {tittle: 'Home'} },
    { path:'/about', name: 'about', component: About, meta: {tittle: 'About'} },
    { path:'/', redirectTo: '/home'},
    { path:'/:pathMatch(.*)*', name: 'not-found', component: pageNotFound, meta: {tittle: 'Page Not Found'} },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router;