// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyCTPJaLV9ixiCoQ38iLBhqCduajxBwjl6Y',
  authDomain: 'vuechat-26441.firebaseapp.com',
  databaseURL: 'https://vuechat-26441.firebaseio.com',
  projectId: 'vuechat-26441',
  storageBucket: 'vuechat-26441.appspot.com',
  messagingSenderId: '812794183142'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
