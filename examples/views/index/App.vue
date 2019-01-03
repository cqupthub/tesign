<!-- index -->
<template>
    <div class="index">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {
                        name: '通用',
                        hasChildren: true,
                        show: false,
                        children: [
                            {name: 'Button按钮', link: '/docs/button'},
                        ]
                    },
                    {name: 'layout布局', link: '/docs/layout', hasChildren: false},
                    {name: '可拖拽元素', link: '/docs/dragBox', hasChildren: false}
                ]
            };
        },

        components: {},

    }
</script>

<style scoped lang="less">
    .index {
        width: 100%;
        height: 100%;
    }
</style>