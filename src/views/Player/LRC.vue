<template>
  <div class="container">
    <div class="ly" ref="LRC">
      <p
        v-for="(item,index) in lrcData"
        :key="index"
      >{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'current'],
  data() {
    return {
      lrcData: {},
      timeKet: []
    }
  },
  methods: {
    getLRC() {
      this.$api.getLRC({ id: this.id }).then(res => {
        // console.log(res);
        // this.lrcData = res.lrc.lyric
        // console.log(this.lrcData);
        this.filterLRC(res.lrc.lyric)
      })
    },
    filterLRC(lrcData) {
      let lastLy = {}
      if (!lrcData) return
      const reg = /\[\d*:\d*(\.|:)\d*]/g
      // 得到分隔换行后的数组
      const lrcList = lrcData.split('\n')
      lrcList.forEach(element => {
        // 得到[]的内
        if (element.match(reg)) {
          const Time = element.match(reg)[0]
          const min = parseInt(Time.match(/\[\d*/i).toString().slice(1))
          // 秒
          const sec = parseInt(Time.match(/\:\d*/i).toString().slice(1))
          const allSec = min * 60 + sec
          var content = element.replace(Time, '')
          lastLy[allSec] = content
        }
        // console.log(Time);
        // 得到分
      })
      this.lrcData = lastLy
      // console.log(this.lrcData);
      // console.log( this.lrcData);
      this.timeKet = Object.keys(this.lrcData)
      // console.log(this.timeKet)
      // this.lrcData.forEach((item)=>{
      //   this.timeKet.push(item.key)
      // })
    },
  },
  watch:{
    current(){
      document.querySelectorAll('p').forEach((item)=>{
        item.className=''
      })
      this.timeKet.some((item,index,arr)=>{

        if(parseInt(item)<=this.current&&parseInt(arr[index+1])>this.current){
          this.$refs.LRC.style.top=-(index-2)*8.5714+'vw'
          document.querySelectorAll('p')[index+1].className="current"
          return
        }
      })
    }
  },
  created() {
    this.getLRC()
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  height: 42.8571vw;
  overflow: hidden;
  margin-bottom: 20px;
  p {
    text-align: center;
    font-size: 4vw;
    height: 8.5714vw;
    line-height: 8.5714vw;
    padding: 0;
    margin: 0;
    font-family: '宋体';
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis
  }
  .ly {
    width: 100%;
    position: absolute;
    top: 17.1429vw;
  left: 50%;
  transition: all .2s linear;
  transform: translateX(-50%);
    overflow: scroll;
  }
  .current{
    color: red;
  }
}
</style>