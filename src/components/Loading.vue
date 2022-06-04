<template>
  <div class="container">
    <div class="load">
      <van-loading color="#fc3f3e" size="10.5vw" text-color="black" vertical>加载中...</van-loading>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container{
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #fff;
  .load{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>