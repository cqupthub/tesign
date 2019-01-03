/**
 * @file nav/index.js
 *
 * @author yupeng(yupeng12@baidu.com)
 * @created: 2018/12/20
 */

import nav from './src/layout.vue';

nav.install = function(Vue) {
    Vue.component(nav.name, nav);
};

export default nav;