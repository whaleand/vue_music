<template>
  <div class="container">
    <div class="pop">
      <!-- 气泡弹出内容 -->
      <van-popover
        v-model:show="showPopover"
        :actions="list"
        @select="onSelect"
      >
        <ul
          style=""
          class="pop"
        >
          <li
            v-for="item in list"
            :key="item.id"
            @click="select(item.name)"
          >{{item.name}}
          </li>
        </ul>
        <template #reference>
          <van-cell-group inset>
            <van-field
              v-model.lazy.trim="value"
              label="搜索"
              @update:model-value="update"
              @keyup.enter="searchM(1)"
              placeholder="请输歌手名、歌曲名"
              autocomplete=false
            />
            <van-button
              type="default"
              class="search"
              @click="searchM(1)"
            ><i class="iconfont icon-sousuo"></i></van-button>
          </van-cell-group>
        </template>
      </van-popover>
    </div>
    <keep-alive>
      <div
        class="cont"
        v-if="cont"
      >
        <!-- 搜索结果 -->
        <van-tabs
          v-model:active="active"
          @change="change"
        >
          <van-tab title="歌曲">
            <div v-if="songList">
              <ul class="songList">
                <router-link
                  class="songItem"
                  :to="`/play/${item.id}/${item.name}/${item.artists.map(i=>{return i.name})}/${encodeURIComponent('@/assets/logo.png')}`"
                  v-for="(item,index) in songList"
                  :key="item.id"
                ><span>{{index+1}} &nbsp;</span>{{item.name}}
                  <span
                    v-for="i in item.artists.map(i=>{return i.name})"
                    :key="i.id"
                  >{{i}} &nbsp;</span>
                </router-link>
              </ul>
            </div>
            <div v-else>暂无内容</div>

          </van-tab>
          <van-tab title="歌手">
            <div v-if="singerList">
              <ul>
                <SingerRow
                v-for="(item,index) in singerList"
                :id="item.id"
                :key="index"
                  :img="item.picUrl"
                  :singer="item.name"
                ></SingerRow>

              </ul>
            </div>
            <div v-else>暂无内容</div>

          </van-tab>
          <van-tab title="专辑">
            <div v-if="albums">
              <ul class="albumsList">
              <album-list :albums="albums"></album-list>
              </ul>
            </div>
            <div v-else>暂无内容</div>
          </van-tab>
          <van-tab title="歌单">
            <div v-if="playlist">
              vvvvvvv
            </div>
            <div v-else>暂无内容</div>

          </van-tab>
        </van-tabs>

      </div>
      <!-- 其他 -->
      <div
        class="other"
        v-else
      >
        <!-- 热搜榜 -->
        <Hot @hotSelect="select"></Hot>
        <!-- 音乐专区 -->
        <special-area></special-area>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import MusicRow from '../components/MusicRow.vue'
import Hot from '../components/Hot.vue'
import SpecialArea from '../components/SpecialArea.vue'
import SingerRow from '@/components/SingerRow.vue'
import albumList from '@/components/albumList.vue'
export default {
  components: {
    Nav,
    MusicRow,
    Hot,
    SpecialArea,
    SingerRow,
    albumList
  },
  data() {
    return {
      // 输入框的值
      value: '',
      // 弹出框、
      showPopover: false,
      // 弹出的内容
      list: [],
      // 歌曲
      songList: [],
      singerList: [],
      albums: [],
      playlist: [],
      // 搜索内容展现：
      cont: false
    }
  },
  methods: {
    // 搜索时展现弹出框
    show() {
      if(!this.value) return
      this.$api.search({ keywords: this.value }).then(res => {
        if (res.result.songs) {
          this.list = res.result.songs
        }
        if (res.result.artists) {
          res.result.artists.slice(0, 4).forEach(element => {
            this.list.push(element)
          })
        }
        this.showPopover = true
      })
    },
    // 防抖函数
    antiShake(fn, wait) {
      let timeOut = null
      return (function () {
        if (timeOut) clearTimeout(timeOut)
        timeOut = setTimeout(fn, wait)
      })()
    },
    // 正在输入
    update() {
      if (this.value.trim() == '') {
        this.showPopover = false
        this.cont=false
        return
      }
      this.antiShake(this.show, 1000)
    },
    // 切换搜索结果
    change(index, title) {
      if (index == 1) {
        this.searchM(100)
      }
      if (index == 2) {
        this.searchM(10)
      }

      if (index == 3) {
        this.searchM(1000)
      }
    },
    searchM(type) {
      this.showPopover=false
      this.cont = true
      this.$api.searchM({ keywords: this.value, type: type }).then(res => {
        if (res.result.songs) {
          this.songList = res.result.songs
        }
        if (res.result.artists) {
          this.singerList = res.result.artists
        }
        if (res.result.albums) {
          this.albums = res.result.albums
        }
      })
    },
    // 选中热搜或选项
    select(val) {
      this.value = val
      this.searchM(1)
      this.showPopover = false
    }
  }
}
</script>

<style lang="less" scoped>
.pop {
  margin-left: -30px;
  width: 300px;
  li {
    padding: 0 0 0 100px;
    margin-bottom: 10px;
  }
}
.search {
  position: absolute;
  left: 80%;
  top: 40px;
}
.songList {
  a {
    display: block;
    color: black;
    padding: 10px 20px;
  }
}

</style>