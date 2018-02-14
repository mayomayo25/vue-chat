// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

// global store (vuex)
const store = new Vuex.Store({ // eslint-disable-line
  state: {
    // 単純なテキストデータ
    message: '初期メッセージ',
    loginFlag: false
  },
  mutations: {
    // メッセージの書き換え
    setMessage (state, payload) {
      state.message = payload
    },
    setLoginFlag (state, payload) {
      state.loginFlag = payload
    }
  },
  actions: {
    setLoginFlag (context, flag) {
      context.commit('setLoginFlag', flag)
    }
  },
  getters: {
    // message をそのまま使用
    message (state) { return state.message },
    loginFlag (state) { return state.loginFlag }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // vue-router router add in root
  store, // vuex store add in root
  components: { App },
  template: '<App/>'
})
