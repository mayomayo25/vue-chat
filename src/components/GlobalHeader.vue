<template lang="pug">
  header.global_header
    ul.list
      router-link.list-item(tag="li" id="nav_login" to="/login")
        a.link Login
      router-link.list-item(tag="li" id="nav_1th" to="/ChatUserCreateMain")
        a.link Chat
      router-link.list-item(tag="li" id="nav_2th" to="/ChatUserCreateMain")
        a.link Chat
      router-link.list-item(tag="li" id="nav_3th" to="/ChatUserCreateMain")
        a.link Chat
      router-link.list-item(tag="li" id="nav_chat" to="/ChatUserCreateMain")
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
