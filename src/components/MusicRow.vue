<template>
  <!-- 非首页歌曲行 -->
  <div class="container">
    <span class="num">{{index}}</span>
    <div class="item">
      <router-link
        :to="`/play/${id}/${song}/${singer}/${encodeURIComponent(image)}`"
        tag="div"
      >
        <div class="song">{{song}} <span v-if="desc[0]">({{desc[0]}})</span>
        </div>
        <div class="singers">
          <sub
            style="color:#959595"
            v-for="(item,index) in singer"
            :key="index"
          >{{item}}&nbsp;&nbsp;</sub>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  props: ['index', 'id', 'song', 'desc', 'singer', 'image'],
  data() {
    return {}
  },
  mounted() {
    // console.log(this.id);
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 11.4286vw;
  width: 100%;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
}
.num {
  width: 50px;
  text-align: center;
  display: inline-block;
  color: #a2a2a2;
}
.item {
  display: inline-block;
  a {
    text-decoration: none;
  }

  .song {
    font-size: 2.1429vw;
    color: black;
    span {
      color: #a2a2a2;
      // display: -webkit-box;
      // -webkit-box-orient: vertical;
      // -webkit-line-clamp: 1;
    }
  }
  .singers {
    width: 85.7143vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>