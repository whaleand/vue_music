<template>
  <NavBack
    class="nav"
    title="歌单分类"
  ></NavBack>
  <div class="container">
    <div class="cate">
      <van-sidebar
        v-model="active"
        @change="onchange"
        
      >
        <van-sidebar-item
          v-for="item in tags"
          :key="item.id"
          :title="item.name"
        ></van-sidebar-item>
      </van-sidebar>
    </div>
    <div class="content">
      <listDetail :tag="tag"></listDetail>
    </div>
  </div>

</template>

<script>
import NavBack from '@/components/NavBack.vue'
import listDetail from '@/components/listDetail.vue'
export default {
  components: {
    NavBack,
    listDetail
  },
  data() {
    return {
      active: 0,
      tags: [],
      tag: '华语'
    }
  },
  methods: {
    getsongListCate() {
      this.$api.getsongListCate().then(res => {
        this.tags = res.tags
      })
    },
    onchange(index) {
      this.tag = this.tags[index].name
    }
  },
  created() {
    this.getsongListCate()
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  .cate {
    display: inline-block;
    position: fixed;
    width: 14.2857vw;
    top: 11.4286vw;
    bottom: 0;
    // top: 0;
    // height: 100%;
    // bottom: 0;
  }
  .content {
    display: inline-block;
    position: fixed;
    top: 11.4286vw;
    overflow: scroll;
    bottom: 0;
    left: 14.2857vw;
  }
}
</style>