<template lang="pug">
  header.global_header
    ul.list
      router-link.list__item(tag="li" id="nav_home" to="/" exact)
        a.link Chat
      router-link.list__item(tag="li" id="nav_1th" to="/" exact)
        a.link Chat
      router-link.list__item(tag="li" id="nav_2th" to="/" exact)
        a.link Chat
      router-link.list__item(tag="li" id="nav_3th" to="/" exact)
        a.link Chat
      router-link.list__item(tag="li" id="nav_chat" to="/" exact)
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
