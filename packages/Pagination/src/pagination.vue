<template>
  <div class="pageMain">
    <ul class="pagination" >
      <li v-show="current !== 1" @click="current-- && goto(current--)" ><a href="javascript:;">上一页</a></li>
      <li v-for="index in pages" @click="goto(index)" :class="{'active':current === index}" :key="index">
       <a href="javascript:;" >{{index}}</a>
      </li>
      <li v-show="pagedata.allPage !== current && pagedata.allPage !== 0 " @click="current++ && goto(current++)"><a href="javascript:;" >下一页</a></li>
      <!-- <li v-show="current !== pagedata.allPage" @click="goto(pagedata.allPage)" ><a href="#">尾页</a></li> -->
    </ul>
    <div class="pageDetail" v-if="false">
      <div class="pageDetail-item"><span>共:{{pagedata.allPage}}页</span></div>
      <div class="pageDetail-item">
        <span class="toPageSpan">到</span>
        <input class="toWhichPage" type="text" v-model="toPage" placeholder="">
        <span class="toPageSpan">页</span>
        <input class="surePage" type="button" value="确定" @click="gotoPage(toPage)">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    props: {
      pagedata: {
        type: Object
      }
    },
    data () {
      return {
        current: 1,
        showItem: this.pagedata.showItem || 5,
        allPage: this.pagedata.allPage || 10,
        toPage: ''
      };
    },
    computed: {
      pages: function () {
        let pag = [];
        if (this.current < this.pagedata.showItem) { // 如果当前的激活的项 小于要显示的条数
          // 总页数和要显示的条数那个大就显示多少条
          let i = Math.min(this.pagedata.showItem, this.pagedata.allPage);
          while (i) {
            pag.unshift(i--);
          }
        } else { // 当前页数大于显示页数了
          let middle = this.current - Math.floor(this.showItem / 2);
          let i = this.pagedata.showItem;
          if (middle > (this.pagedata.allPage - this.pagedata.showItem)) {
            middle = (this.pagedata.allPage - this.pagedata.showItem) + 1;
          }
          while (i--) {
            pag.push(middle++);
          }
        }
        return pag;
      }
    },
    methods: {
      goto: function (index) {
        if (index === this.current) return;
        this.current = index;
        this.returnPage(index);
      },
      gotoPage: function (page) {
        let pageOne = 0;
        if (Number(page)) {
          if (pageOne < page && page <= this.pagedata.allPage) {
            this.returnPage(page);
            this.current = Number(page);
          } else {
            console.log('没有该页');
          }
        } else {
          console.log('请输入正确的数字');
        }
      },
      returnPage: function (thePage) {
        this.$emit('returnThePageNum', thePage);
      }
    }
  };
</script>