<template>
<div class="login-menu">
  <div class="login-menu-tile shadow-normal">
    <login-form></login-form>
    <uncreated-user-zone></uncreated-user-zone>
  </div>
</div>
</template>

<script>
import LoginMenuForm from '../components/LoginMenuForm'
import UncreatedUserZone from '../components/UncreatedUserZone'
import firebase from 'firebase'

// users以下を全て取得
var usersRef = firebase.database().ref('users')

export default {
  name: 'loginMenu',
  firebase: {
    users: usersRef
  },
  components: {
    'login-form': LoginMenuForm,
    'uncreated-user-zone': UncreatedUserZone
  }
}
</script>

<style lang="stylus">
.login-menu
  position relative
  width 100%
  max-width 1280px
  height 100%
  margin 0 auto
  &-tile
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 90%
    max-width 800px
    height 100%
    max-height 400px
    margin auto
    border-radius 20px
    background-color #f5f5f5
    &::after
      content ''
      display block
      clear both

    // カスタムタグ部分
    .login-menu-left,.login-menu-right
      float left
      height 90%
      margin-top 2.5%
      padding 20px
      box-sizing border-box
    .login-menu-left
      width 400px
      border-right 1px solid rgba(#009688, 0.7)
    .login-menu-right
      width calc(100% - 400px)
      max-width 400px
</style>
