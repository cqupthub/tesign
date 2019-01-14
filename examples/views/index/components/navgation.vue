<!-- navgation -->
<template>
    <div class='navgation'>
        <ul>
            <li v-for="(link, i) in links" :key="i">
                <router-link v-if="!link.hasChildren"></router-link>
                <a v-else>{{link.name}}</a>
            </li>
            
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'navgation',
        data() {
            return {
                links: [{
                        name: '通用',
                        hasChildren: true,
                        show: false,
                        children: [{
                            name: 'Button按钮',
                            link: '/docs/button'
                        }, ]
                    },
                    {
                        name: 'layout布局',
                        link: '/docs/layout',
                        hasChildren: false
                    },
                    {
                        name: '可拖拽元素',
                        link: '/docs/dragBox',
                        hasChildren: false
                    },
                    {
                        name: '分页',
                        link: '/docs/pagination',
                        hasChildren: false
                    }
                ]
            };
        },

        components: {},

    }

</script>

<style scoped lang='less'>
    .navgation {}
</style>