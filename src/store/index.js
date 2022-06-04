import { createStore } from 'vuex'

export default createStore({
  state: {
    Loading:false,
    stop:false
  },
  mutations: {
    showLoading(state){
      state.Loading=true
      state.stop=false
    },
    hideLoading(state){
      state.Loading=false
      state.stop=false
    },
    failLoading(state){
      state.stop=true
      state.Loading=false
    }
  },
  actions: {
  },
  modules: {
  }
})
