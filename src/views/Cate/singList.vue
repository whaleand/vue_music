<template>
  <nav-back
    title="歌手分类"
    class="nav"
  ></nav-back>
  <div class="container">
    <div class="tabs">
      <van-tabs
        v-model:active="active1"
        title-active-color="#cf423e"
        @change="tab1Change"
        type="none"
        color="white"
        style="width:90%;"
      >
        <van-tab title="华语"></van-tab>
        <van-tab title="欧美"></van-tab>
        <van-tab title="日本"></van-tab>
        <van-tab title="韩国"></van-tab>
        <van-tab title="其他"></van-tab>
      </van-tabs>
      <van-tabs
        v-model:active="active2"
        title-active-color="#cf423e"
        @change="tab2Change"
        type="none"
        style="width:54%;"
      >
        <van-tab title="男"></van-tab>
        <van-tab title="女"></van-tab>
        <van-tab title="乐队/组合"></van-tab>
      </van-tabs>
    </div>
    <ul>
      <div class="tit">
        热门歌手
      </div>
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        offset="100"
        @load="onLoad"
      >
        <singer-row
          v-for="(item) in singerList"
          :key="item.id"
          :id="item.id"
          :img="item.picUrl"
          :singer="item.name"
        ></singer-row>

      </van-list>
    </ul>

  </div>
</template>

<script>
import NavBack from '@/components/NavBack.vue'
import SingerRow from '@/components/SingerRow.vue'
export default {
  components: {
    NavBack,
    SingerRow
  },
  data() {
    return {
      singerList: [],
      // 第一个切换栏
      active1: 0,
      // 第二个
      active2: 0,
      // 上拉加载更多
      loading: false,
      finished: false,
      page: -10
    }
  },
  methods: {
    onLoad() {
      // this.state=0
      // 当加载100条停止加载
      if (this.singerList.length >= 100) {
        this.finished = true
        return
      }
      this.page+=10
      this.getSingers()
      
    },
    async getSingers() {
      await this.$api.getTop({ limit: 10, offset: this.page }).then(res => {
        if (this.singerList.length== 0) {
          this.singerList = res.artists
          this.loading = false
          return
        }
        this.singerList = [...this.singerList, ...res.artists]
        this.loading = false
      })
    },
    tab1Change(val) {
      // switch (val) {
      //   case 0:
      //     this.area = 7
      //     break
      //   case 1:
      //     this.area = 96
      //     break
      //   case 2:
      //     this.area = 8
      //     break
      //   case 3:
      //     this.area = 16
      //     break
      //   case 4:
      //     this.area = 0
      //     break
      // }
      // this.getSingers(this.type, this.area,0,1)
    },
    tab2Change(val) {
      // switch (val) {
      //   case 0:
      //     this.type = 1
      //     break
      //   case 1:
      //     this.type = 2
      //     break
      //   case 2:
      //     this.type = 3
      //     break
      // }
      // this.getSingers(this.type, this.area,0,1)
    }
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
.container {
  .tabs {
    margin-top: 11.4286vw;
    padding-top: 2.8571vw;
  }
}
</style>