<template>
    <div id="app">
        <index />
    </div>
</template>

<script>
    import index from './views/index/App.vue'
    export default {
        name: 'App',
        components: {
            index
        }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100%;
    }
</style>