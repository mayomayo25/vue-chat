<template>
  <div id="app">
    <global-header></global-header>
    <router-view></router-view>
    <global-footer></global-footer>
  </div>
</template>

<script>
import globalHeader from './components/GlobalHeader'
import globalFooter from './components/GlobalFooter'
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
    globalHeader,
    globalFooter
  }
}
</script>

<style lang="stylus">
body
  background-color #E0F2F1

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

.shadow-normal
  box-shadow 0 2px 5px rgba(0,0,0,0.3)
.shadow-deep
  box-shadow 0 2px 10px rgba(0,0,0,.5)

.ripple
  position relative
  overflow hidden
.ripple .rp-effect
  position absolute
  border-radius 50%
  opacity 0.1/*波紋の濃さ*/
  transform scale(0)
  background #FFF/*波紋色*/
  animation ripple 700ms
  pointer-events none

@-webkit-keyframes ripple {
  to {
    opacity 0
    transform scale(2.0)
  }
}

@keyframes ripple {
  to {
    opacity 0
    transform scale(2.0)
  }
}
</style>
