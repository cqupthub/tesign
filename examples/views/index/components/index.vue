<!-- 首页 -->
<template>
    <div class="index">
        <div class="wrap"></div>
        <div class="operation">
            <a href="javascript:;" @click="started">开始使用</a>
            <a href="https://github.com/AllenYuNT/tesign" target="_blank">Github</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
        };
    },

    components: {},

    methods: {
        started() {
            this.$router.push("/docs");
        }
    }

}

</script>

<style scoped lang='less'>
.index {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
}
</style>