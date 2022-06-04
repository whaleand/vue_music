<template>
  <div class="topNav">
    <van-tabs v-model:active="active"  @click-tab="onClickTab">
      <van-tab
        title="首页"
        to="/"
        replace
      >
      
      </van-tab>
      <van-tab
        title="榜单"
        to="/topic"
        replace
      >
      </van-tab>
      <van-tab
        title="发现"
        to="/search"
        replace
      >

      </van-tab>
      <van-tab
        title="我的"
        to="/mine"
        replace
      >

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  data(){
    return{
      active:0,
    }
  },
  methods:{
    onClickTab(v1){
      this.active=v1.name
    }
  },
  watch:{
    '$route':function(){
      switch(this.$route.path){
        case '/':
          this.active=0
          break
        case '/topic':
          this.active=1
          break
        case '/search':
          this.active=2
          break
        case '/mine':
          this.active=3
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.topNav{
  z-index: 200;
}
// .top-nav {
//   width: 100%;
//   display: flex;
//   padding-left: 0;
//   li {
//     flex: 1;
//     list-style: none;
//     height: 7.1429vw;
//     line-height: 7.1429vw;
//     text-align: center;
//     box-sizing: border-box;
//     &:hover {
//       border-bottom: 2px red solid;
//     }
//     a {
//       text-decoration: none;
//       color: #848280;
//     }
//   }
// }
</style>