<template>
  <div class="container">
    <div class="image" v-for="item in TopicList" :key="item.id">
      <img :src="item.coverImgUrl" alt="">
      <i class="iconfont icon-bofang1"></i>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import TopicView from '../components/TopicView.vue'
export default {
  components: {
    Nav,
    TopicView
  },
  data() {
    return {
      // 歌单
      TopicList: [],
      // 每个歌单的id
      ids: [],
      // 信息
    }
  },
  methods: {
    async getTopList() {
      await this.$api
        .getTopList()
        .then(res => {
          this.TopicList = res.list.slice(0, 18)
          // this.TopicList.forEach(item => {
          //   this.ids.push(item.id)
          // })
        })
        .then(() => {
          // this.xxx()
        })
    },
  },
  created() {
    this.getTopList()
  }
}
</script>

<style lang="less" scoped>
.container{
  margin-top: 1.4286vw;
  padding: 0 4.2857vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .image{
    margin-bottom: 1.4286vw;
    width: 31%;
    position: relative;
    img{
      width: 100%;
      border-radius: 2vw;
    }
    i{
      position: absolute;
      font-size: 5.1429vw;
      color: rgba(255, 255, 255, .5);
      bottom: 1.7143vw;
      right: 1.7143vw;
    }
  }
}

</style>