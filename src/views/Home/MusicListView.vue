<template>
<!-- 首页列表 -->
  <div class="container" v-if="show">
    <div class="part">
      <div class="title">
        <h3>推荐歌单</h3>
      </div>
      <div class="list">
        <ListItem
          v-for="item in recommendList"
          :key="item.id"
          :id="item.id"
          :img="item.picUrl"
          :song="item.name"
          :playcount="item.playcount"
        ></ListItem>
      </div>
    </div>
    <div class="part">
      <div class="title">
        <h3>推荐新歌</h3>
      </div>
      <div class="list">
        <MusicItem
          v-for="item in newMusic"
          :key="item.id"
          :id="item.id"
          :img="item.picUrl"
          :song="item.name"
          :singer="item.song.artists"
          :alias="item.song.alias[0]"
          :popularity="item.song.popularity"
        ></MusicItem>
      </div>
    </div>

  </div>
</template>

<script>
import MusicItem from '@/components/MusicItem.vue'
import ListItem from '@/components/ListItem.vue'
export default {
  components: {
    MusicItem,
    ListItem
  },
  data() {
    return {
      show:false,
      recommendList: [],
      newMusic:[],
    }
  },
  methods: {
    async Init() {
     await this.$api.getRecommend().then(res => {
        this.recommendList = res.recommend
        // console.log(this.recommendList);
      })

    await  this.$api.getNewMusic().then(res=>{
        this.newMusic=res.result
      }).then(()=>{
        this.show=true
      })
    }
  },
  created() {
    this.Init()
  }
}
</script>

<style lang="less" scoped>
.list{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  
}
.title {
  padding: 0 2.8571vw;
  padding-bottom: 2.8571vw;
  h3 {
    display: inline;
    font-size: 5.7143vw;
  }
}
</style>