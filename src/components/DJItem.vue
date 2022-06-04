<template>
  <div class="container">
    <router-link :to="`/djDetail/${id}`">
      <div class="img">
        <img
          :src="picUrl"
          alt=""
        >
      </div>
      <div class="desc">
        <div class="tit">
          {{name}}&nbsp;&nbsp;&nbsp;<span>by{{nickname}}</span>
        </div>
        <div class="alia">
          {{rcmdtext}}
        </div>
        <div class="info">
          <span>{{category}}</span>&nbsp;&nbsp;&nbsp;
          <i class="iconfont icon-shouting"></i>{{pl}}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['id', 'category', 'picUrl', 'name', 'nickname', 'rcmdtext', 'playCount'],
  data() {
    return {
      pl: 0
    }
  },
  methods: {
    pC() {
      const p = this.playCount
      this.pl = p > 10000 && p < 100000000 ? (p / 10000).toFixed(1) + '万' : (p / 100000000).toFixed(1) + '亿'
    }
  },
  created() {
    this.pC()
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 1.0286vw 2.8571vw;
  a {
    display: flex;
    height: 20vw;
    .img {
      flex: 2;
      img {
        width: 100%;
        border-radius: 2.8571vw;
      }
    }
    .desc {
      flex: 8;
      font-family: '宋体';
      color: black;
      box-sizing: border-box;
      padding: 0 2.8571vw;
      .tit {
        font-weight: 600;
        font-size: 4.5714vw;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        span {
          font-size: 3.4286vw;
          color: #999999;
        }
      }
      .alia {
        font-size: 4vw;
      }
      .info {
        color: #aaaaaa;

        span {
          color: #fd5150;
          width: fit-content;
          display: inline-block;
          padding: 0.2857vw;
          font-size: 2.4286vw;
          border: 1px solid #fd5150;
          border-radius: 1.7143vw;
        }
      }
    }
  }
}
</style>