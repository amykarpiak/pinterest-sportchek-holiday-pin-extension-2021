// Modules.
import Vue from 'vue';
import VueRouter from 'vue-router';

// Views.
import Home from '@/views/Home.vue';
import CategoryList from '@/views/CategoryList.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categories/:id',
        name: 'categories',
        component: CategoryList
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
