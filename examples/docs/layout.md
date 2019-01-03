# Layout布局
### 左侧导航栏
:::demo
```html
<template>
    <div class="index">
        <div class="nav">
            <T-layout :links="links"></T-layout>
        </div>
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
                    {name: 'Nav导航', link: '/docs/nav', hasChildren: false}
                ]
            };
        }

    }
</script>

</style>
```