<template>
  <router-link
    class="item"
    tag="div"
    :to="`/play/${id}/${song}/${singer}/${encodeURIComponent(img)}`"
  >
    <!-- <div class="fengmian">
      <img
        :src="img"
        alt=""
      >
    </div>
    <div class="song">
      {{song}}
    </div>
    <div class="singer">
      {{singer}}
    </div> -->
    <div class="img">
      <img
        :src="img"
        alt=""
      >
      <i class="iconfont icon-bofang1"></i>
    </div>
    <div class="desc">
      <div class="song">
        {{song}}&nbsp;&nbsp;<span
          v-for="item in singer"
          :key="item.id"
        >{{item.name}}&nbsp;&nbsp;&nbsp;</span>
      </div>
      <div class="alias">
        <i class="iconfont icon-huo"></i>
        <span>{{popularity}}&nbsp;&nbsp;{{alias}}</span>
      </div>
    </div>
    <div class="ic">
      <i class="iconfont icon-bofangMV"></i>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['img', 'song', 'singer', 'id', 'alias', 'popularity']
}
</script>

<style lang="less" scoped>
.item {
  padding: 1.0286vw 2.8571vw;
  color: black;
  display: flex;
  height: 17.1429vw;
  .img {
    position: relative;
    flex: 1.5;
    margin-right: 2.8571vw;

    img {
      width: 100%;
      border-radius: 2.8571vw;
    }
    i {
      position: absolute;
      top: 5.7143vw;
      left: 5.7143vw;
      color: rgba(247, 244, 244, 0.7);
    }
  }
  .desc {
    flex: 7;
    .song {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      font-size: 4vw;
      span {
        font-size: 3.4286vw;
        color: gray;
      }
    }
    .alias {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 1;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;

      i {
        color: red;
      }
      span {
        font-size: 3.4286vw;
      }
    }
  }
  .ic{
    flex: 1;
    text-align: center;
    height: fit-content;
    i{
      font-size: 4.5714vw;
    }
  }
}
// .item {
//   color:black;
//   text-decoration: none;
//   width: 30%;
//     margin: 0 1.5%;

//   margin-bottom: 2.8571vw;
//   img {
//     width: 100%;
//   }
//   .song,
//   .singer {
//     text-align: center;
//   }
//   .song{
//     font-size: 3vw;
//     // 实现最多显示两行文本，多的隐藏
//     display: -webkit-box;
//     overflow: hidden;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//   }
// }
</style>