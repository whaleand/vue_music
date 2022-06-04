<template>
  <music-list-view></music-list-view>
</template>

<script>
import Nav from '../components/Nav.vue'
import MusicListView from './Home/MusicListView.vue'
export default {
  name: 'Home',
  components: {
    MusicListView,
    Nav
  },
  
}
</script>

<style lang="less" scoped>
</style>