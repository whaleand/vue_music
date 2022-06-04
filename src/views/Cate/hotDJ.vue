<template>
  <nav-back
    title="热门电台"
    class="nav"
  ></nav-back>
  <div class="container">
    <ul>
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="50"
      >
        <DJItem
          v-for="item in DJList"
          :id="item.id"
          :key="item.id"
          :name="item.name"
          :category="item.category"
          :picUrl="item.picUrl"
          :nickname="item.dj.nickname"
          :rcmdtext="item.rcmdtext"
          :playCount="item.playCount"
        ></DJItem>

      </van-list>

    </ul>
  </div>
</template>

<script>
import NavBack from '@/components/NavBack.vue'
import DJItem from '@/components/DJItem.vue'
export default {
  components: {
    NavBack,
    DJItem
  },
  data() {
    return {
      limit: 10,
      offset: 0,
      DJList: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    async getDJ() {
      await this.$api.getDJ({ limit: this.limit, offset: this.offset }).then(res => {
        if (this.offset == 0) {
          this.DJList = res.djRadios
          this.offset += 10
          return
        }
        this.DJList = [...this.DJList, ...res.djRadios]
        this.offset += 10
      })
    },
    onLoad() {
      this.loading = false
      if (this.DJList.length >= 60) {
        this.finished = true
        return
      }
      this.getDJ()
    }
  },
  created() {
   
  }
}
</script>

<style lang="less" scoped>
ul {
  margin-top: 11.4286vw;
}
</style>