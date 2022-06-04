<template>
    <div class="container">
    <h3>音乐专区</h3>
    <ul>
      <li>
        <router-link to="/singerList">
          <span>歌手分类</span>
          <i class="iconfont icon-geshou"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/songList">
          <span>歌单分类</span>
          <i class="iconfont icon-bofanggedan"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/newSong">
          <span>新歌速递</span>
          <i class="iconfont icon-zhuanji"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/hotDJ">
          <span>热门电台</span>
          <i class="iconfont icon-diantai"></i>
        </router-link>
      </li>
    </ul>
    </div> 

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container{
   padding: 0 5.7143vw;
   ul{
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
   }
   li{
     width: 46%;
     border-radius: 5%;
     margin-bottom: 4.2857vw;
     display: inline-block;
     height: 20vw;
     &:nth-child(1){
       background: -webkit-linear-gradient(left,#8f7e76,#decfc5);
     }
     &:nth-child(2){
       background: -webkit-linear-gradient(left,#fa4739,#ffad9c);
     }
     &:nth-child(3){
       background: -webkit-linear-gradient(left,#4d3cf4,#72d3f2);
     }
     &:nth-child(4){
       background: -webkit-linear-gradient(left,#eec031,#f4e19b);
     }
     a{
       display: block;
       line-height:20vw ;
       span{
         margin-left: 5.7143vw;
         font-size: 5.7143vw;
         color: white;
         font-weight: 600;
       }
     }
     i{
       color: white;
       margin-left: 2.8571vw;
       font-size: 5.7143vw;
     }
   }
}

</style>