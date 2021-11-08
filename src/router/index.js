// Modules.
import Vue from 'vue';
import VueRouter from 'vue-router';

// Views.
import Home from '@/views/Home.vue';
import Category from '@/views/Category.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/category/:id',
        name: 'category',
        component: Category
    },
];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        window.scrollTo(0, 0);
      }
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth',
        }
      }
    },
});

export default router;
