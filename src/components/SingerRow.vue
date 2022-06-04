<template>
  <router-link :to="`/singerDetail/${id}`" tag="li" class="container">
    <div class="image">
      <img
        :src="img"
        alt=""
      >

    </div>
    <div class="desc">
      <span class="name">{{singer}}</span>
      <span class="guanzhu">
        +&nbsp;关注
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['img', 'singer','id']
}
</script>

<style lang="less" scoped>
.container {
  display: block;
  height: 20vw;
  box-sizing: border-box;
  padding: 10px 20px;
  .image {
    display: inline-block;
    width: 14.2857vw;
    height: 14.2857vw;
    margin-right: 5.7143vw;

    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    // vertical-align: middle;
  }
  .desc {
    display: inline-block;
    width: 75%;
    position: relative;
    top: -50%;
    color: black;
    transform: translate(0,50%);
    .guanzhu {
      float: right;
      color: #cf3e39;
      // padding: 1.4286vw;
      border: 1px solid #cf3e39;
      border-radius: 1.7143vw;
    }
  }
}
</style>