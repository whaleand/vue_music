<template>
<!-- 返回顶部 -->
  <div class="back" v-show="show">
    <span @click="BackTop"><i class="iconfont icon-fanhuidingbu"></i></span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false
    }
  },
  methods:{
    BackTop(){
      document.documentElement.scrollTop=0
    }
  },
  created(){
    const winWidth=document.documentElement.clientHeight
    window.addEventListener('scroll',()=>{
      let scroll= document.documentElement.scrollTop
      if(winWidth<scroll)
      {
        this.show=true
      }else{
        this.show=false
      }
    })
  }
}
</script>

<style lang="less" scoped>
.back{
  position: fixed;
  z-index: 99;
  width: 11.4286vw;
  height: 11.4286vw;
  text-align: center;
  line-height: 11.4286vw;
  border-radius: 50%;
  background-color: #f1f3f4;
  bottom: 8.5714vw;
  right: 5.7143vw;
  i{
    font-size: 5.7143vw;
  }
}
</style>