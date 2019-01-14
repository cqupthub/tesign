# 分页

:::demo
```html
<template>
  <div>
    <T-pagination :pagedata="pageData" v-if="pageData" v-on:returnThePageNum="getThePageNum"></T-pagination>
  </div>
</template>

<script>
  export default {
    components: {
      pagination
    },
    data () {
      return {
        pageData: {
          'allPage': 15,
          'showItem': 5
        }
      };
    },
    methods: {
      getThePageNum: function (page) {
        console.log('页码为：' + page);
      }
  }
</script>
```