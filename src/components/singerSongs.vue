<template>
  <div class="container" v-if="songsList">
    <MusicRow
      v-for="(item,index) in songsList"
      :key="index"
      :index="index+1"
      :id="item.id"
      :song="item.name"
      :singer="item.ar.name"
      :desc="item.alia"
    ></MusicRow>
  </div>
</template>

<script>
import MusicRow from '@/components/MusicRow.vue'
export default {
  components: {
    MusicRow
  },
  props: ['id'],
  data() {
    return {
      songsList: []
    }
  },
  methods: {
    async getArtistSongs() {
      await this.$api.getArtistSongs({ id: this.id }).then(res => {
        // console.log(res);
        this.songsList = res.songs.slice(0, 20)
      })
    }
  },
  watch:{
    id(){
      this.getArtistSongs()
    }
  },
  mounted() {
    // this.getArtistSongs()
  }
}
</script>

<style lang="less" scoped>
.container{
  margin-left: -2.8571vw;
}
</style>