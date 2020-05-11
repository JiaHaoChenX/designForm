import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curRenderForm: {}
  },
  getters: {
    getCurRenderForm: state => {
      return state.curRenderForm
    }
  },
  mutations: {
    setCurRenderForm (state, form) {
      state.curRenderForm = form
    }
  },
  actions: {
  },
  modules: {
  }
})
