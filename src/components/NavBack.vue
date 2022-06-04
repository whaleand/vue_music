<template>
  <div class="container">
    <i
      @click="$router.back()"
      class="iconfont icon-zuojiantou"
      style="color:white;font-size:7.1429vw;margin-left: 4.2857vw;"
    ></i>
    <span class="title">
      {{title}}
    </span>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  position: fixed;
  top: 0;
  height: 11.4286vw;
  background-color: #d41414;
  z-index: 200;
  line-height: 11.4286vw;
  .title {
    color: white;
    font-size: 4.5714vw;
    margin-left: 2.8571vw;
  }
}
</style>