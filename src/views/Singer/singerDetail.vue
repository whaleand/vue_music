<template>
  <NavBack title="歌手详情"></NavBack>
  <div class="container">
    <div class="bg">
    </div>
    <div class="info">
      <div class="avater" v-if="user.avatarUrl">
        <img
          :src="user.avatarUrl"
          alt=""
        >
      </div>
    </div>

    <h4>{{info.name}}</h4>
    <ul class="des">
      <li>关注</li>
      <li>粉丝</li>
    </ul>
    <p class="description">
      {{user.description}}
    </p>

    <ul
      class="change"
      @click="change"
      ref="ul"
    >
      <li
        @click="active=0"
        class="active"
      >主页</li>
      <li @click="active=1">歌曲<sup>{{info.musicSize}}</sup></li>
      <li @click="active=2">专辑</li>
      <!-- <sup>{{info.mvSize}}</sup> -->
      <li @click="active=3">动态</li>
    </ul>
    <div class="card">
      <div
        class="act1"
        v-show="active==0"
      >
        <h3>艺人百科</h3>
        <p>艺人名：{{info.name}}</p>
        <p>身份：<span
            v-for="(item,index) in secondaryExpertIdentiy"
            :key="index"
          >{{item.expertIdentiyName}}&nbsp;&nbsp;</span></p>
        <p>性别：<span v-if="user.gender==2">女</span><span v-else>男</span></p>
        <p ref="briefDesc">歌手简介：{{info.briefDesc}}</p>
        <p
        ref="open"
          style="text-align: center;"
          @click="open"
        >展开></p>
      </div>
      <div
        class="act1"
        v-show="active==1"
      >
      
        <singer-songs :id="id"></singer-songs>
      </div>
      <div
        class="act1"
        v-show="active==2"
      >
        专辑
        <ul>
          <albumList :id="id"></albumList>
        </ul>
      </div>
      <div
        class="act1"
        v-show="active==3"
      >
        动态
      </div>
    </div>
  </div>
</template>

<script>
import NavBack from '@/components/NavBack.vue'
import singerSongs from '@/components/singerSongs.vue'
import albumList from '@/components/albumList.vue'
export default {
  components: {
    singerSongs,
    NavBack,
    albumList
  },
  data() {
    return {
      id: 0,
      info: {},
      active: 0,
      user: {},
      secondaryExpertIdentiy: [],
      albums:[]
    }
  },
  methods: {
    // 获得数据
    async getSingerDetail() {
      await this.$api.getSingerDetail({ id: this.$route.params.id }).then(res => {
        // console.log(res)
        this.id = res.data.artist.id
        this.info = res.data.artist
        this.user = res.data.user
        this.secondaryExpertIdentiy = res.data.secondaryExpertIdentiy
        // console.log(this.user)
      })
      // .then((res) => {
      //
      // })
    },
    // 切换
    change(e) {
      // console.log(e)
      const lis = [...this.$refs.ul.children]

      lis.forEach(element => {
        element.className = ''
      })
      // this.$refs.ul.children[0].className='active'
      lis[this.active].className = 'active'
    },
    // 展开briefDesc
    open() {
      this.$refs.briefDesc.style.overflow = 'visible'
      this.$refs.open.style.display='none'
    }
  },
  created() {
    this.getSingerDetail()
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  // background-color: black;
  .bg {
    width: 100%;
    height: 57.1429vw;
    // background-image: url('../assets/IMG_20220217_004544.jpg')
    background: url('../../assets/IMG_20220217_004544.jpg') no-repeat 0 0;
    background-size: cover;
  }
  .info {
    position: relative;
    .avater {
      position: absolute;
      left: 50%;
      top: -50%;
      transform: translate(-50%);
      width: 17.1429vw;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
  }
  h4 {
    margin-top: 17.1429vw;
    font-size: 5.7143vw;
    text-align: center;
  }
  .des {
    display: flex;
    width: 40%;
    margin: 0 auto;
    li {
      flex: 1;
      justify-content: space-around;
    }
  }
  .description {
    text-align: center;
    color: #aaaaaa;
    font-size: 4.2857vw;
  }
  .change {
    display: flex;
    width: 60%;
    margin: 5.7143vw auto;
    justify-content: space-around;

    li {
      width: fit-content;
    }
    .active {
      border-bottom: 3px solid #de4e4e;
    }
  }
  .card {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 5.7143vw;
    h3 {
      font-size: 4.8571vw;
    }
    p {
      display: -webkit-box;
      font-size: 4.2857vw;
      line-height: 1.2;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
}
</style>