// Modules.
import Vue from 'vue';

// Styles.
import '@/styles/index.scss';

// Misc.
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
