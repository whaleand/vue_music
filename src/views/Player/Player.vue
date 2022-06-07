<template>
  <NavBackVue></NavBackVue>
  <div class="container">
    <div class="head">
      <div class="song">{{$route.params.song}}</div>
      <div
        class="singer"
      ><span v-for="(item,index) in singers" :key="index">{{item}}</span></div>
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
      :src="music.url"
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
      singers:[]
    }
  },
  methods: {
    init() {
      this.$api.getMusic({ id: this.$route.params.id }).then(res => {
        // console.log(res);
        this.music = res.data[0]
        // console.log(this.music);
      })
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
    this.singers=(this.$route.params.singer)
    // console.log(this.singers);
    // console.log(decodeURIComponent(this.$route.params.singer));
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