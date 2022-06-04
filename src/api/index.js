import { get } from '@/utils/request.js'

const api = {
  // 登录
  login() {
    return get('/api/login/cellphone?phone=18380923948&password=when45678nnw')
  },
  // 获取推荐歌单
  getRecommend() {
    return get('/api/recommend/resource')
  },
  // // 获取歌单详情，用不了
  // getListDetail(params) {
  //   return get('/api/playlist/detail', params)
  // },
  // 歌曲播放
  getMusic(params) {
    return get('/api/song/url', params)
  },
  // 歌曲详情
  getMusicDetail(params) {
    return get('/api/song/detail', params)
  },
  // 获取推荐新歌
  getNewMusic(params) {
    return get('/api/personalized/newsong', params)
  },
  // 获取榜单接口
  getTopList() {
    return get('/api/toplist')
  },
  // 搜索建议
  search(params) {
    //必选参数 : keywords : 关键词

    // 可选参数 : type : 如果传 'mobile' 则返回移动端数据

    // 接口地址 : /search/suggest
    return get('/api/search/suggest', params)
  },
  searchM(params) {
    // 说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接

    // 必选参数 : keywords : 关键词

    // 可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

    // type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)

    // 接口地址 : /search 或者 /cloudsearch(更全)

    // 调用例子 : /search?keywords=海阔天空 /cloudsearch?keywords=海阔天空
    return get('/api/search', params)
  },
  // 获取歌词
  getLRC(params) {
    return get('/api/lyric', params)
  },
  // 热搜列表
  getHot() {
    return get('/api/search/hot')
  },

  
  // 歌手榜
  getTop(params) {
    return get('/api/top/artists', params)
  },
  // // 歌手详情
  // getSingerDetail(params){
  //   return get('/api/artist/detail',params)
  // }
  // 获取歌单的类别
  getsongListCate(){
    return get('/api/playlist/hot')
  },
  // 获取网友精选碟歌单
  //   可选参数 : order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'

  // cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)

  // limit: 取出歌单数量 , 默认为 50

  // offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值

  // 接口地址 : /top/playlist

  // 调用例子 : /top/playlist?limit=10&order=new
  getSelctList(params) {
    return get('/api/top/playlist', params)

  },
  // 新歌速递
  getTopsong(params){
    // 不支持下拉加载
    return get('/api/top/song',params)
  },
  // 热门电台
  getDJ(params){
    return get('/api/dj/hot',params)
  },
  // 电台详情
  getDjdetail(params){
    return get('/api/dj/detail',params)
  }

}
export default api