<template>
  <div class="container">
    <div class="fail">
      <p>加载失败...</p>
      <van-button plain type="primary" @click="$router.back()">返回</van-button>&nbsp;&nbsp;&nbsp;<van-button plain type="danger" @click="$router.go(0)">重新加载</van-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #fff;
  .fail{
     position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    p{
      text-align: center;
      font-size: 5.7143vw;
      font-weight: bold;
      margin-bottom: 2.7143vw;
    }
    
  }
}
</style>