<template>
  <!-- 首页封面 -->
  <router-link
    class="item"
    tag="div"
    :to="`/home/listDetail/${id}`"
  >
    <div class="fengmian">
      <img
        :src="img"
        alt=""
      >
      <div class="playcount">
      <i class="iconfont icon-bofang"></i>  {{pl}}
      </div>
    </div>
    <div class="song">
      {{song}}
    </div>
    <div class="singer">
      {{singer}}
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['img', 'song', 'singer', 'id', 'playcount'],
  data(){
    return{
      pl:''
    }
  },
  methods:{
    playcoutFilter(){
      const p=this.playcount
      this.pl=(p>10000&&p<100000000)?((p/10000).toFixed(1)+'万'):((p/100000000).toFixed(1)+'亿')
    }
  },
  mounted(){
    this.playcoutFilter()
  }
}
</script>

<style lang="less" scoped>
.item {
  color: black;
  text-decoration: none;
  width: 30%;
  margin: 0 1.5%;
  margin-bottom: 2.8571vw;
  img {
    width: 100%;
  }
  .playcount {
    i{
      font-size: 3.1429vw;
    }
    position: relative;
    top: -30.4286vw;
    right: 0px;
    border-radius: 1.7143vw;
    padding: .2857vw 1.4286vw;
    background-color: rgba(84, 69, 69,.3);
    width: fit-content;
    font-size: 3.1429vw;
    color: white;
  }
  .song,
  .singer {
    text-align: center;
  }
  .song {
    font-size: 3vw;
    // 实现最多显示两行文本，多的隐藏
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>