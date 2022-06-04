<template>
  <NavBack class="nav" title="歌手详情"></NavBack>
  <div class="container">
    <div class="desc">
      {{$route.params.id}}
    </div>
  </div>
</template>

<script>
import NavBack from '@/components/NavBack.vue'

export default {
  components: {
    NavBack
  },
  methods: {
    // getSingerDetail() {
    //   this.$api.getSingerDetail({ id: this.$route.params.id }).then(res => {
    //     console.log(res)
    //   })
    // }
  },
  created() {
    // this.getSingerDetail()
  }
}
</script>
<style lang="less" scoped>
.desc {
  margin-top: 11.4286vw;
}
</style>