<template>
  <NavBackVue></NavBackVue>
  <div class="container">
    <div class="head">
      <div class="song">{{$route.params.song}}</div>
      <div
        class="singer"
        v-if="$route.params.singer"
      >{{$route.params.singer}}</div>
    </div>
    <div class="cover">
      <img
        :src="decodeURIComponent($route.params.image)"
        alt=""
      >
    </div>

    <LRC
      :id="$route.params.id"
      :current="currentTime"
    ></LRC>
    <audio
      ref="player"
      :src="src"
      controls
      autoplay
      @play="addEventHandle"
    ></audio>

    <!-- :src="music.url" -->

  </div>
</template>

<script>
import NavBackVue from '../../components/NavBack.vue'
import LRC from './LRC.vue'
export default {
  components: {
    NavBackVue,
    LRC
  },
  data() {
    return {
      music: {},
      currentTime: '',
      src: require('../../assets/王心凌-爱你.mp3')
    }
  },
  methods: {
    init() {
      // this.$api.getMusic({ id: this.$route.params.id }).then(res => {
      //   this.music = res.data[0]
      // })
    },
    addEventHandle() {
      // console.log(this.$refs.player);
      const player = this.$refs.player
      player.addEventListener('timeupdate', e => {
        this.currentTime = this.$refs.player ? this.$refs.player.currentTime : null
      })
    }

    // console.log('oo')

    // const player = this.$refs.player

    // player.removeEventListener('timeupdate')
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="less" scoped>
.container {
  // margin-top: 40px;
  .head {
    margin-top: 11.4286vw;
    text-align: center;

    .song {
      font-size: 5.7143vw;
      font-weight: 700;
    }
    .singer {
      font-size: 4vw;
    }
  }
  .cover {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    img {
      width: 57.1429vw;
    }
  }
}
</style>