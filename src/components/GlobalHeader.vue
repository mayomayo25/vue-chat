<template lang="pug">
  header.global_header.shadow-deep#global-header
    router-link.site-title(tag="h1" id="nav_home" to="/")
      a.site-title--link Vuechat
    nav.nav
      ul.nav-list
        router-link.nav-list-item.ripple(tag="li" id="nav_login" to="/login" v-on:click.native="rippleEffect")
          a.nav-list-item--link Login
        router-link.nav-list-item.ripple(tag="li" id="nav_1th" to="/ChatUserCreateMain" v-on:click.native="rippleEffect")
          a.nav-list-item--link Chat
        router-link.nav-list-item.ripple(tag="li" id="nav_2th" to="/ChatUserCreateMain" v-on:click.native="rippleEffect")
          a.nav-list-item--link Chat
        router-link.nav-list-item.ripple(tag="li" id="nav_3th" to="/ChatUserCreateMain" v-on:click.native="rippleEffect")
          a.nav-list-item--link Chat
        router-link.nav-list-item.ripple(tag="li" id="nav_chat" to="/ChatUserCreateMain" v-on:click.native="rippleEffect")
          a.nav-list-item--link Chat
</template>

<script>

export default {
  name: 'globalHeader',
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
  line-height 80px
  background-color #009688
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
    float left
    width calc(100% - 250px)
    &-list-item
      display inline-block
      width 20%
      &--link
        display block
        color #f5f5f5
        text-decoration none
        background-color #009688
</style>
