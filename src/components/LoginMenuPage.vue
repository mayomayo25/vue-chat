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
  @media (max-width 960px)
    min-height 800px
  &-tile
    display flex
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
    @media (max-width 960px)
      flex-direction column
      top 20px
      bottom 80px
      width 400px
      min-height 700px
    @media (max-width 480px)
      width 90%
    // カスタムタグ部分
    .login-menu-left,.login-menu-right
      height 90%
      margin-top 2.5%
      padding 20px
      box-sizing border-box
    .login-menu-left
      width 400px
      border-right 1px solid rgba(#009688, 0.7)
      @media (max-width 960px)
        border-right none
        border-bottom 1px solid rgba(#009688, 0.7)
      @media (max-width 480px)
        width 100%
    .login-menu-right
      width calc(100% - 400px)
      max-width 400px
      @media (max-width 960px)
        width 400px
      @media (max-width 480px)
        width 100%
</style>
