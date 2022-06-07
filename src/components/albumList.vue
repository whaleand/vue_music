<template>
  <router-link
    v-for="(item,index) in albumss"
    :key="index"
    :to="`/album/${item.id}`"
    class="item"
  >
    <img
      :src="item.picUrl"
      alt=""
    >
    <div class="tit"><span class="sp1">{{item.name}}</span>
      <br>
      <span class="sp2">{{item.artist.name}}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['albums', 'id'],
  data() {
    return {
      albumss: []
    }
  },
  methods: {
    getSingerAlbums() {
      this.$api.getSingerAlbums({ id: this.id }).then(res => {
        this.albumss = res.hotAlbums
        // console.log(res);
      })
    }
  },
  watch: {
    id() {
      // 由歌手获取专辑
      if (this.id) {
        // console.log(this.id);
        this.getSingerAlbums()
      }
    },
    albums() {
      this.albumss = this.albums
    }
  },
  created() {}
}
</script>

<style lang="less" scoped>
.item {
  display: block;
  padding: 2.8571vw 5.7143vw;
  img {
    width: 15%;
    border-radius: 1%;
    vertical-align: baseline;
  }
  .tit {
    width: 70%;
    display: -webkit-inline-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-left: 2.8571vw;
    overflow: hidden;
    color: black;
    .sp1 {
      display: inline-block;
      font-size: 4vw;
      margin: 2.8571vw 0;
    }
    .sp2 {
      display: inline-block;

      font-size: 1.4286vw;
      color: #bababa;
    }
  }
}
</style>