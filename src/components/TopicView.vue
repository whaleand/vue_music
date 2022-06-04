<template>
  <router-link class="container" tag="div" :to="`/home/listDetail/${id}`">
    <div class="l">
      <h3>{{name}}</h3>
      <img
        :src="image"
        alt=""
      >
    </div>
    <div class="r">
      <ul>
        <li><span>1.{{songs[0].name}}</span>-<span>{{songs[0].ar[0].name}}</span></li>
        <li><span>2.{{songs[1].name}}</span>-<span>{{songs[1].ar[0].name}}</span></li>
        <li><span>3.{{songs[2].name}}</span>-<span>{{songs[2].ar[0].name}}</span></li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['name', 'image', 'id', 'songs'],
  data() {
    return {}
  },
  methods: {},
  created() {
    // console.log(this.songs);
  }
}
</script>

<style lang="less" scoped>
.container {
  // background-color: antiquewhite;
  margin-bottom: 5px;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  // border: 1px solid blanchedalmond;
  .l {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1.7143vw;
    width: 30%;
    // background-color: palegreen;
    h3 {
      color: black;
      margin: 1.8571vw 0;
      // line-height: 0.3;
    }
    img {
      width: 70%;
      border-radius: 2.8571vw;
    }
  }
  .r {
    // background-color: pink;
    width: 70%;
    padding-top: 2.7143vw;
    ul {
      padding: 0;
      padding-right: 5.7143vw;
      li {
        color: black;
        list-style: none;
        margin: 2.8571vw 0;
        font-size: 4.5714vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span:nth-child(1){
          font-weight: 700;
          color: #59606d;
        }
        span:nth-child(2){
          color: #aa9f9e;
        }
      }
    }
  }
}
</style>