<!-- nav -->
<template>
    <div class="layout">
        <div class="nav">
            <h3>{{title}}</h3>
            <ul>
                <router-link v-for="(link, i) in links" :key="i" v-if="!link.hasChildren" :to="link.link">{{link.name}}</router-link>
                <li v-for="(link, i) in links" :key="i" v-if="link.hasChildren" @click="showChildren(link)">
                    {{link.name}}
                    <i v-if="!link.show" class="fa fa-chevron-up link-icon-show" aria-hidden="true"></i>
                    <i v-else class="fa fa-chevron-down link-icon-show" aria-hidden="true"></i>
                    <ul class="children" v-if="link.hasChildren && link.show" @click.stop="showChildren">
                        <router-link v-for="(child, j) in link.children" :key="j" :to="child.link">{{child.name}}</router-link>
                    </ul>
                </li>
            </ul>
        </div>
        <router-view class="warper" />

    </div>
</template>

<script>
    export default {
        name: 'TLayout',
        data() {
            return {};
        },
        props: {
            title: {
                type: String,
                default: 'Welcome to tesign'
            },
            links: {
                type: Array,
                default: () => {
                    return [{
                            name: 'link-1',
                            hasChildren: true,
                            children: [{
                                name: 'link-1-1',
                                link: '/link1/link11'
                            }, {
                                name: 'link-1-2',
                                link: '/link1/link12'
                            }]
                        },
                        {
                            name: 'link-2',
                            link: '/link2',
                            hasChildren: false
                        }
                    ]
                }
            }
        },

        components: {},

        methods: {
            showChildren(item){
                item.show = !item.show;
            }
        }
    }
</script>

<style scoped lang='less'>
</style>