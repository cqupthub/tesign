import Vue from 'vue';
import Router from 'vue-router';
import index from '../views/index/components/index.vue';
import docs from '../views/index/components/docs.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/docs',
            component: docs
        },
    ],
});