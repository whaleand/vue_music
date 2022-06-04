<template>
  <NavBack></NavBack>
  <div class="container">
    <div class="nav">
      <div class="top">
        <div class="image">
          <img
            :src="djRadio.picUrl"
            alt=""
          >
        </div>
        <div class="desc">
          <div class="name">{{djRadio.name}}</div>
          <div
            class="dj"
            v-if="djRadio.dj"
          >
            <img
              :src="djRadio.dj.avatarUrl"
              alt=""
            >
            {{djRadio.dj.nickname}}&nbsp; &nbsp;<i class="iconfont icon-icon_follow"></i>
          </div>
          <div class="tags">
            {{djRadio.category}}&nbsp;>
          </div>
        </div>

      </div>
      <div class="mid">
        <p>{{djRadio.desc}}</p>
      </div>
      <div class="bottom">
        <div class="share">
          <i class="iconfont icon-fenxiang"></i>
          {{djRadio.shareCount}}
        </div>
        <div class="comment">
          <i class="iconfont icon-pinglun"></i>
          {{djRadio.commentCount}}
        </div>
        <div class="like">
          <i class="iconfont icon-shoucang"></i>
          &nbsp;收藏
          {{p}}
        </div>

      </div>

    </div>
    <div class="guodu">
      <span>声音<sup>{{commentDatas.length}}</sup></span>
      <i class="iconfont icon-paixu"></i>
      <i class="iconfont icon-quanxuan"></i>
    </div>
    <ul>
      <MusicItem
        v-for="item in commentDatas"
        :key="item.commentId"
        :id="item.commentId"
        :song="item.programName"
        :img="djRadio.picUrl"
        :alias="item.content"
      >
      </MusicItem>
    </ul>
  </div>
</template>

<script>
import NavBack from '@/components/NavBack.vue'
import MusicItem from '@/components/MusicItem.vue'
export default {
  components: {
    NavBack,
    MusicItem
  },
  data() {
    return {
      djRadio: {},
      commentDatas: [],
      p: 0
    }
  },
  created() {
     this.$api.getDjdetail({ rid: this.$route.params.rid }).then(res => {
      this.djRadio = res.djRadio
      this.commentDatas = this.djRadio.commentDatas
      const subCount = this.djRadio.subCount
      this.p = subCount > 10000 && subCount < 100000000 ? (subCount / 10000).toFixed(1) + '万' : (subCount / 100000000).toFixed(1) + '亿'
    })
  }
}
</script>

<style lang="less" scoped>
.container {
  .nav {
    margin-top: 11.4286vw;
    padding-top: 5.7143vw;
    background: -webkit-linear-gradient(top, #666667, #ababab);
    padding-bottom: 4.5714vw;
    > div {
      padding: 0 2.8571vw;
    }
    .top {
      display: flex;
      // background-color: blanchedalmond;
      .image {
        flex: 3;
        img {
          width: 100%;
          border-radius: 4.2857vw;
        }
      }
      .desc {
        padding: 0 2.8571vw;
        flex: 7;
        .name {
          color: white;
          font-weight: 600;
          font-size: 5.7143vw;
          margin-bottom: 2.8571vw;
        }
        .dj {
          width: 100%;
          color: #b3b3b3;
          font-size: 3.4286vw;
          margin-bottom: 2.8571vw;

          img {
            width: 12%;
            border-radius: 50%;
            vertical-align: middle;
          }
        }
        .tags {
          color: white;
          font-size: 3.4286vw;
          width: fit-content;
          padding: 0.5714vw;
          border-radius: 1.4286vw;
          background-color: #868686;
        }
      }
    }
    .mid {
      p {
        color: #cccccc;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      div {
        text-align: center;
        // padding: 1.4286vw;
        width: 20%;
        height: 8.5714vw;
        line-height: 8.5714vw;
        border-radius: 3.8571vw;
        background-color: #fff;
        font-size: 2.5714vw;
        &:nth-child(1) {
          i {
            font-size: 7.5714vw;
            vertical-align: middle;
          }
        }
        &:nth-child(3) {
          width: 40%;
          background-color: #fe3b3b;
          color: white;
        }
        i {
          font-size: 5.7143vw;
          vertical-align: middle;
        }
      }
    }
  }
  .guodu {
    background: -webkit-linear-gradient(top, #ababab, #fff);
    height: 11.4286vw;
    padding: 0 2.8571vw;
    line-height: 11.4286vw;
    font-weight: 700;
    position: relative;
    span {
      border-bottom: 1.1429vw solid #ff5857;
      border-radius: 0.8571vw;
    }

    i {
      position: absolute;
      right: 4.8571vw;
      font-size: 5.7143vw;
      color: black;
      &:nth-child(2) {
        right: 15.4286vw;
      }
    }
  }
}
</style>