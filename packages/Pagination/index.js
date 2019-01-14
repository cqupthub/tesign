/**
 * @file 
 *
 * @author yupeng(yupeng12@baidu.com)
 * @created: 2019/01/14
 */

import Pagination from './src/pagination.vue';

Pagination.install = function (Vue) {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;