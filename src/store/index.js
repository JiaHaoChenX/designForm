import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curRenderFormId: ''
  },
  getters: {
    getCurRenderFormId: state => {
      console.log(state.curRenderFormId)
      return state.curRenderFormId
    }
  },
  mutations: {
    setCurRenderFormId (state, id) {
      state.curRenderFormId = id
    }
  },
  actions: {
  },
  modules: {
  }
})
