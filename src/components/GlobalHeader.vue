<template lang="pug">
  header.global_header.shadow-deep#global-header
    .container
      router-link.site-title(tag="h1" id="nav_home" to="/" v-on:click.native="isActive=!isActive")
        a.site-title--link Vuechat
      nav.nav
        ul.nav-list(v-bind:class='{active:isActive}')
          router-link.nav-list-item(tag="li" id="nav_login" to="/login" v-on:click.native="isActive=!isActive")
            a.nav-list-item--link Login / User Create
          router-link.nav-list-item(tag="li" id="nav_2th" to="/chatroom_list" v-on:click.native="isActive=!isActive")
            a.nav-list-item--link Chatroom
          router-link.nav-list-item(tag="li" id="nav_2th" to="/" v-if='loginFlag' v-on:click.native="logoutFunc(),isActive=!isActive")
            a.nav-list-item--link.logout Logout
      .menu-button.shadow-deep(v-bind:class='{active:isActive}' v-on:click='isActive=!isActive')
        i.material-icons menu
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapActions, mapState } from 'vuex' // eslint-disable-line

export default {
  name: 'globalHeader',
  data: function () {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapState({
      loginFlag: 'loginFlag',
      userEmail: 'email'
    })
  },
  methods: {
    logoutFunc: function () {
      this.$store.dispatch('setLoginFlag', false)
      this.$store.dispatch('setUserEmail', '')

      firebase.auth().signOut().then(function () {
      // Sign-out successful.
        this.$router.push('/login')
      }).catch(function () {
      // An error happened.
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.global_header
  width 100%
  height 80px
  margin-top -80px
  line-height 80px
  background-color #009688
  .container
    width 100%
    max-width 1280px
    margin 0 auto
    @media(max-width 960px)
      position relative
    &::after
      content ''
      clear both
      display block
    .site-title
      display inline-block
      float left
      width 250px
      font-size 40px
      font-weight bold
      &--link
        color #f5f5f5
        text-decoration none
    .nav
      float right
      width calc(100% - 250px)
      height 100%
      @media(max-width 960px)
        position absolute
        top 80px
        right 0
        width 400px
      &-list
        display flex
        justify-content flex-end
        width 100%
        max-width 800px
        margin-left auto
        margin-right 0
        @media(max-width 960px)
          display none
          &.active
            display block
            box-shadow 0 2px 10px rgba(0,0,0,.4)
        &-item
          width 20%
          @media(max-width 960px)
            width 100%
          &--link
            display block
            color #f5f5f5
            text-decoration none
            background-color #009688
            @media(max-width 960px)
              border-bottom 1px solid #004D40
              box-sizing border-box
              color #004D40
              background-color #B2DFDB
            &.logout
              display inline
              padding 10px 20px
              border-radius 10px
              font-weight bold
              color #f5f5f5
              background-color #ff9162
    .menu-button
      display none
      @media(max-width 960px)
        display inline-block
        position absolute
        top 10px
        right 10px
        width 60px
        height 60px
        line-height 85px // メニューアイコン位置調整
        border-radius 50%
        background-color #E0F2F1
        cursor pointer
        transition all linear .2s
        &.active
          background-color #80CBC4
      .material-icons
        @media(max-width 960px)
          font-size 36px
</style>
