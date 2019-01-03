// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
import demoBlock from './components/demo-block.vue';
import './assets/css/index.less';
import tesign from '../packages/index';
import '../packages/styles/index.less';

Vue.component('demo-block', demoBlock);
Vue.use(tesign);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    router,
    template: '<App/>'
});