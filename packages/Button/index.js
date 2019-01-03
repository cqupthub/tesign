/**
* @file {TM_FILENAME}
*
* @author yupeng(yupeng12@baidu.com)
* @created: 2018/12/04
*/

import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;