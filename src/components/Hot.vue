<template>
  <div class="container">
    <h3>热搜榜</h3>
    <ul>
      <li
        @click="hotSelect(item.first)"
        v-for="(item,index) in songs"
        :key="index"
      ><span>{{index+1}}</span> &nbsp;<span>{{item.first}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songs: []
    }
  },
  methods: {
    hotSelect(val) {
      this.$emit('hotSelect', val)
    }
  },
  created() {
    this.$api.getHot().then(res => {
      // console.log(res);
      this.songs = res.result.hots
      //  console.log(this.songs);
    })
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 0 5.7143vw;
  li {
    display: -webkit-inline-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: 50%;
    margin-bottom: 2.8571vw;
    &:nth-child(-n + 3) {
      span:nth-child(1) {
        color: red;
      }
      span:nth-child(2) {
        font-weight: 600;
      }
    }
    &:nth-child(n + 4) {
      span:nth-child(1) {
        color: #9f9f9f;
      }
    }
  }
}
</style>