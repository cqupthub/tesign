export default [
    {
        path: '/docs/button',
        name: 'button',
        component: r => require.ensure([], () => r(require('../docs/button.md')))
    },
    {
        path: '/docs/layout',
        name: 'layout',
        component: r => require.ensure([], () => r(require('../docs/layout.md')))
    },
    {
        path: '/docs/dragBox',
        name: 'dragBox',
        component: r => require.ensure([], () => r(require('../docs/dragBox.md')))
    }
]