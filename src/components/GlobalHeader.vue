<template lang="pug">
  header.global_header
    ul.list
      router-link.list__item(tag="li" id="nav_home" to="/" exact)
        a.link home
      router-link.list__item(tag="li" id="nav_1th" to="/Test01" )
        a.link 1th
      router-link.list__item(tag="li" id="nav_2th" to="/Test02" )
        a.link 2th
      router-link.list__item(tag="li" id="nav_3th" to="/Test03" )
        a.link 3th
      router-link.list__item(tag="li" id="nav_chat" to="/Chat" )
        a.link Chat
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.global_header
  width 100%
  height 80px
  background-color #ccc
</style>
