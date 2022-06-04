<template>
  <div id="nav">
    <keep-alive>
      <Nav v-if="flag"></Nav>
    </keep-alive>
    <back-top></back-top>
    <Loading v-show="Loading"></Loading>
    <fail-loading v-show="stop"></fail-loading>
    <router-view></router-view>
  </div>

</template>
<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import BackTop from '@/components/backTop.vue'
import Loading from '@/components/Loading.vue'
import failLoading from '@/components/failLoading.vue'
import FailLoading from './components/failLoading.vue'
export default {
  components: {
    Nav,
    BackTop,
    Loading,
    failLoading,
    FailLoading
  },
  data() {
    return {
      flag: true,
      pathList: ['/', '/topic', '/mine', '/search', '/home']
    }
  },
  computed: {
    ...mapState(['Loading','stop']),
  },
  methods: {
    showIf() {
      this.flag = false

      if (this.pathList.includes(this.$route.path)) {
        this.flag = true
      }
    }
  },
  watch: {
    $route(to, from) {
      this.showIf()
    }
  }
  // created() {
  //   this.showIf()
  // }
}
</script>
<style lang="less">
</style>
