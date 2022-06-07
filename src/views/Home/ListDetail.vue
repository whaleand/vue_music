<template>
  <!-- 首页歌单详情页 -->
  <div class="container">
    <NavBackVue title="歌单详情"></NavBackVue>

    <div class="desc">
      <div>
        <div class="listImg">
          <img
            v-if="playlist.coverImgUrl"
            :src="playlist.coverImgUrl"
            alt=""
          >
          <img
            v-else
            src="@/assets/logo.png"
            alt=""
          >
        </div>
        <div class="worddesc">
          <div class="title">
            {{playlist.name}}
          </div>
          <p>{{playlist.description}}</p>
        </div>
      </div>
      <div class="about">
        <ul>
          <li><img
              src="@/assets/add.png"
              alt=""
            >{{(playlist.subscribedCount/10000).toFixed(1)}}万</li>
          <li><img
              src="@/assets/comment.png"
              alt=""
            >{{(playlist.commentCount/10000).toFixed(1)}}万</li>
          <li><img
              src="@/assets/share.png"
              alt=""
            >{{(playlist.shareCount/10000).toFixed(1)}}万</li>
        </ul>
      </div>
    </div>
    <div class="musicList">
      <MusicRow
        v-for="(item,index) in musicList"
        :key="item.id"
        :id="item.id"
        :song="item.name"
        :desc="item.alia"
        :singer="item.ar.map((item)=>{
          return (item.name)
        })"
        :image="item.al.picUrl"
        :index="index+1"
      ></MusicRow>

    </div>
  </div>
</template>

<script>
import NavBackVue from '../../components/NavBack.vue'
import MusicRow from '@/components/MusicRow.vue'
export default {
  components: {
    MusicRow,
    NavBackVue
  },
  data() {
    return {
      playlist: {},
      musicList: [],
      singers: []
    }
  },
  methods: {
    getListDetail() {
      this.$api.getListDetail({ id: this.$route.params.id }).then(res => {
        //  console.log(res.privileges);
        this.playlist = res.playlist
        // console.log(res);
        this.musicList = res.playlist.tracks
        // console.log(this.musicList);
        // this.musicList.forEach((item)=>{
        //   item.ar.forEach((item)=>{
        //     this.singers.push(item.name)
        //   })
        // })
        // this.musicList.ar.forEach((item)=>{
        //   this.singers.push(item.name)
        // })
        // console.log(this.singers);
      })
    }
  },
  created() {
    this.getListDetail()
  }
}
</script>

<style lang="less" scoped>
.container {
  // padding-top: 40px;
  .desc {
    margin-top: 14.2857vw;
    clear: both;
    margin-bottom: 5.7143vw;
    // background-color: rgba(193, 94, 28, 0.5);
    .listImg {
      float: left;
      width: 24%;
      margin: 0 4.2857vw;
      img {
        width: 100%;
        border-radius: 2.8571vw;
      }
    }
    .title {
      color: #5d5d5d;
      font-weight: 700;
      font-size: 5.5714vw;
      font-family: 'Times New Roman', Times, serif;
    }
    .worddesc {
      p {
        text-indent: 2em;
        font-size: 2.4286vw;
        padding-right: 2.8571vw;
        color: #5d5d5d;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
      }
    }
  }
  .about {
    display: flex;
    margin-top: 8.5714vw;
    justify-content: center;
    align-items: center;
    ul {
      padding: 0;
      margin: 0 auto;
      clear: both;
    }
    li {
      float: left;
      margin: 0 2.8571vw;
      list-style: none;
      font-size: 3.4286vw;
      color: #7e7e7e;
      img {
        width: 5.7143vw;
        vertical-align: middle;
      }
    }
  }
}
</style>