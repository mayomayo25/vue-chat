<template>
  <div id="app">
    <globalHeader></globalHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import globalHeader from './components/GlobalHeader'
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCTPJaLV9ixiCoQ38iLBhqCduajxBwjl6Y',
  authDomain: 'vuechat-26441.firebaseapp.com',
  databaseURL: 'https://vuechat-26441.firebaseio.com',
  projectId: 'vuechat-26441',
  storageBucket: 'vuechat-26441.appspot.com',
  messagingSenderId: '812794183142'
}

firebase.initializeApp(config)

export default {
  name: 'App',
  components: {
    globalHeader
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
