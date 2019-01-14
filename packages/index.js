/**
 * @file {TM_FILENAME}
 *
 * @author yupeng(yupeng12@baidu.com)
 * @created: 2018/12/04
 */

import TButton from './Button/index';
import TLayout from './Layout/index';
import TDragBox from './DragBox/index';
import TPagination from './Pagination/index';

const components = [
    TButton,
    TLayout,
    TDragBox,
    TPagination
];

const install = function(Vue) {
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    TButton,
    TLayout,
    TDragBox,
    TPagination
};