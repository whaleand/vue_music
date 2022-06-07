<template>
  <nav-back
    title="新歌速递"
    class="nav"
  ></nav-back>
  <div class="container">
    <div class="title">
      新歌速递
    </div>
    <div class="tabs">
      <van-tabs v-model:active="active" @change="onChange">
        <van-tab title="全部"></van-tab>
        <van-tab title="华语"></van-tab>
        <van-tab title="欧美"></van-tab>
        <van-tab title="日本"></van-tab>
        <van-tab title="韩国"></van-tab>
      </van-tabs>
    </div>
    <div class="list">
      <musicItem
        v-for="item in songsList"
        :key="item.id"
        :img="item.album.blurPicUrl"
        :song="item.name"
        :singer="item.artists"
        :alias="item.alias[0]"
        :popularity="item.popularity"
        :id="item.id"
      ></musicItem>
    </div>
  </div>
</template>

<script>
import NavBack from '@/components/NavBack.vue'

import musicItem from '../../components/MusicItem.vue'
export default {
  components: {
    musicItem,
    NavBack
  },
  data() {
    return {
      songsList: [],
      type:0,
      active:0
    }
  },
  methods: {
    async getNewSong() {
      await this.$api.getTopsong({ type: this.type }).then(res => {

        this.songsList = res.data.slice(0, 20)
        // console.log(this.songsList);
      })
    },
    onChange(val){
      switch(val){
        case 0:
          this.type=0
          break
        case 1:
          this.type=7
          break
        case 2:
          this.type=96
          break
        case 3:
          this.type=8
          break
        case 4:
          this.type=16
          break
      }
      this.getNewSong()
    }
  },
  created() {
    this.getNewSong()
  }
}
</script>

<style lang="less" scoped>
.container {
  .title {
    margin-top: 11.4286vw;
    font-size: 5.7143vw;
    font-weight: 700;
  }
}
</style>