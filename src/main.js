// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import moment from 'vue-moment'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(moment)
Vue.use(VueSweetalert2)

// global store (vuex)
const store = new Vuex.Store({ // eslint-disable-line
  state: {
    // 単純なテキストデータ
    message: '初期メッセージ',
    loginFlag: false,
    email: ''
  },
  mutations: {
    // メッセージの書き換え
    setMessage (state, payload) {
      state.message = payload
    },
    setLoginFlag (state, payload) {
      state.loginFlag = payload
    },
    setUserEmail (state, payload) {
      state.email = payload
    }
  },
  actions: {
    setLoginFlag (context, flag) {
      context.commit('setLoginFlag', flag)
    },
    setUserEmail (context, text) {
      context.commit('setUserEmail', text)
    }
  },
  getters: {
    // message をそのまま使用
    message (state) { return state.message },
    loginFlag (state) { return state.loginFlag },
    email (state) { return state.email }
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
