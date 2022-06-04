<template>
  <div class="container">
    <div class="bg">

    </div>
    <div class="info">
      <div class="avater">
        <img
          src="../assets/logo.png"
          alt=""
        >

      </div>
      <h4>{{info.name}}</h4>
      <ul>
        <li>{{info.guanzhu}}关注</li>
        <li>{{info.fans}}粉丝</li>
        <li>Lv.{{info.Lv}}</li>
      </ul>
      <div class="des">
        {{info.address}}&nbsp;&nbsp;&nbsp;村龄{{info.age}}年
      </div>
      <div class="edit">
        编辑资料&nbsp;&nbsp;&nbsp;
        <span>></span>
      </div>
    </div>
    <ul
      @click="change"
      ref="ul"
    >
      <li
        @click="active=0"
        class="active"
      >主页</li>
      <li @click="active=1">动态</li>
      <li @click="active=2">播客</li>
    </ul>
    <div class="card">
      <div
        class="act1"
        v-show="active==0"
      >
        <h3>基本信息</h3>
        <p>村龄：1年（2020年09月注册）</p>
        <p>性别：女</p>
        <p>四川 泸州</p>
      </div>
      <div
        class="act1"
        v-show="active==1"
      >
        暂无动态
      </div>
      <div
        class="act1"
        v-show="active==2"
      >
        暂无声音
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      info: {
        name: '鲸落无声',
        guanzhu: 3,
        fans: 0,
        Lv: 4,
        address: '四川 泸州',
        age: 1
      },
      active: 0
    }
  },
  methods: {
    change(e) {
      // console.log(e)
      const lis = [...this.$refs.ul.children]

      lis.forEach(element => {
        element.className = ''
      })
      // this.$refs.ul.children[0].className='active'
      lis[this.active].className = 'active'
    }
  },
  created() {}
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  background-color: black;
  .bg {
    width: 100%;
    height: 57.1429vw;
    // background-image: url('../assets/IMG_20220217_004544.jpg')
    background: url('../assets/IMG_20220217_004544.jpg') no-repeat 0 0;
    background-size: cover;
  }
  .info {
    position: absolute;
    width: 90%;
    // min-height: 300px;
    top: 52.2857vw;
    left: 50%;
    border-radius: 5.7143vw;
    transform: translate(-50%, 30%);
    background-color: #ffffff;
    .avater {
      position: absolute;
      top: -50%;
      left: 50%;
      // background-color: tan;
      transform: translate(-50%, 0);
      width: 22.8571vw;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    h4 {
      text-align: center;
      font-size: 5.7143vw;
      margin: 0;
      margin-top: 5.2857vw;
      margin-bottom: 2.8571vw;
    }
    ul {
      margin: 0 auto;
      width: 60%;
      font-size: 4vw;
      display: flex;
      justify-content: space-around;
      li {
        text-align: center;
        color: gray;
        flex: 1;
      }
    }
    .des {
      margin: 2.8571vw 0;
      text-align: center;
      font-size: 4vw;
    }
    .edit {
      text-align: center;
      font-weight: bold;
      span {
        color: gray;
        display: inline-block;
        transform: rotate(90deg);
      }
    }
  }
  > ul {
    position: absolute;
    top: 105.5714vw;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    display: flex;
    justify-content: space-around;
    li {
      width: fit-content;
      display: inline-block;
    }
    .active {
      border-bottom: 3px solid #de4e4e;
    }
  }
  .card {
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f5f5f5;
    border-radius: 5.7143vw;
    top: 115.8571vw;
    padding: 0 5.7143vw;
    >div{
      &:nth-child(n+2){
      height: 42.8571vw;
      line-height: 42.8571vw;
    }
    }
  }
}
</style>