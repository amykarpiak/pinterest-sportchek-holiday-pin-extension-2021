// Modules.
import Vue from 'vue';
import VueRouter from 'vue-router';

// Views.
import Home from '@/views/Home.vue';
import Kids from '@/views/Kids.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'Kids',
        component: Kids
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
