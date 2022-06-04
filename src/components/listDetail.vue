<template>
  <ul>
    <van-list
      class="li"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in playlists"
        :key="item.id"
      >
        <router-link :to="`/home/listDetail/${item.id}`">
          <img
            :src="item.coverImgUrl"
            alt=""
          >
          <div class="desc">
            <p class="tir">
              {{item.name}}
            </p>
            <p class="ico">

              <i class="iconfont icon-bofang"></i> {{playcoutFilter(item.playCount)}}
              <i
                class="iconfont icon-fenxiang"
                style="font-size: 6.25vw;"
              ></i>
              {{playcoutFilter(item.shareCount)}}
            </p>
          </div>
        </router-link>
      </van-cell>
    </van-list>
  </ul>
</template>

<script>
export default {
  props: ['tag'],
  data() {
    return {
      // 是否首次加载
      flag: 1,
      playlists: [],
      loading: false,
      finished: false,
      offset: 0
    }
  },
  methods: {
    playcoutFilter(val) {
      const p = val
      if(p > 10000 && p < 100000000){
        return(p / 10000).toFixed(1) + '万' 
      }else if(p<10000){
        return p
      }else{
        return (p / 100000000).toFixed(1) + '亿'
      }
    },
    getSelctList() {
      this.$api
        .getSelctList({ cat: this.tag, limit: 10, offset: this.offset })
        .then(res => {
          if (this.flag == 1) {
            this.playlists = res.playlists
            this.flag = 0
          } else {
            this.playlists = [...this.playlists, ...res.playlists]
          }
          return
          // console.log(this.playlists)
        })
        .then(() => {
          this.offset += 10
          this.loading = false
        })
    },
    slow(callback, time) {
      let state = false
      return (function run() {
        if (state) {
          return
        }
        state = true
        callback()
        setTimeout(() => {
          state = false
        }, time)
      })()
    },

    onLoad() {
      // 最多加载100条
      if (this.playlists.length >= 100) {
        this.finished = true
        return
      }
      this.slow(() => {
        this.getSelctList()
      }, 1000)
    }
  },
  // 节流
  watch: {
    tag() {
      this.playlists = []
      this.flag = 1
      this.finished = false
      this.loading = false
      this.getSelctList()
      this.$nextTick(() => {
        this.show = true
        window.scroll(0, 0)
      })
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  width: 100%;
  // overflow: hidden;
  box-sizing: border-box;
  padding: 0 2.8571vw;
  // overflow: scroll;
  .li {
    padding: 1.8571vw;
    a {
      display: block;
      color: #373737;
      img {
        width: 20%;
        border-radius: 2.8571vw;
        vertical-align: top;
      }
      .desc {
        display: inline-block;
        box-sizing: border-box;
        padding-left: 3.7143vw;
        width: 80%;
        p {
          padding: 0;
          margin: 0;
        }
        .tir {
          font-weight: 600;
          font-size: 4.5714vw;
        }
        .ico {
          font-size: 4vw;
        }
      }
    }
  }
}
</style>