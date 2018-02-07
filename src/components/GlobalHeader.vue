<template lang="pug">
  header.global_header.shadow-deep#global-header
    router-link.site-title(tag="h1" id="nav_home" to="/" v-on:click.native="isActive=!isActive")
      a.site-title--link Vuechat
    nav.nav
      ul.nav-list(v-bind:class='{active:isActive}')
        router-link.nav-list-item.ripple(tag="li" id="nav_login" to="/login" v-on:click.native="rippleEffect,isActive=!isActive")
          a.nav-list-item--link Login
        router-link.nav-list-item.ripple(tag="li" id="nav_1th" to="/ChatUserCreatePage" v-on:click.native="rippleEffect,isActive=!isActive")
          a.nav-list-item--link Chat
        router-link.nav-list-item.ripple(tag="li" id="nav_2th" to="/ChatUserCreatePage" v-on:click.native="rippleEffect,isActive=!isActive")
          a.nav-list-item--link Chat
        router-link.nav-list-item.ripple(tag="li" id="nav_3th" to="/ChatUserCreatePage" v-on:click.native="rippleEffect,isActive=!isActive")
          a.nav-list-item--link Chat
        router-link.nav-list-item.ripple(tag="li" id="nav_chat" to="/ChatUserCreatePage" v-on:click.native="rippleEffect,isActive=!isActive")
          a.nav-list-item--link Chat
    .menu-button.shadow-deep(v-bind:class='{active:isActive}' v-on:click='isActive=!isActive')
      i.material-icons menu
</template>

<script>

export default {
  name: 'globalHeader',
  data: function () {
    return {
      isActive: false
    }
  },
  methods: {
    rippleEffect: function () {
      var ripple, ripples, RippleEffect, loc, cover, coversize, pos, x, y, i, num
      // クラス名rippleの要素を取得
      ripples = document.querySelectorAll('.ripple')

      // 位置を取得
      RippleEffect = function (e) {
        ripple = this // クリックされたボタンを取得
        cover = document.createElement('span')
        coversize = ripple.offsetWidth // 要素の幅を取得
        loc = ripple.getBoundingClientRect() // 絶対座標の取得
        x = e.pageX - loc.left - window.pageXOffset - (coversize / 2)
        y = e.pageY - loc.top - window.pageYOffset - (coversize / 2)
        pos = 'top:' + y + 'px; left:' + x + 'px; height:' + coversize + 'px; width:' + coversize + 'px;'

        // spanを追加
        ripple.appendChild(cover)
        cover.setAttribute('style', pos)
        cover.setAttribute('class', 'rp-effect') // クラス名追加

        setTimeout(function () {
          var list = document.getElementsByClassName('rp-effect')
          for (var i = list.length - 1; i >= 0; i--) { // 末尾から順にすべて削除
            list[i].parentNode.removeChild(list[i])
          }
        }, 2000)
      }
      for (i = 0, num = ripples.length; i < num; i++) {
        ripple = ripples[i]
        ripple.addEventListener('mousedown', RippleEffect)
      }
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
