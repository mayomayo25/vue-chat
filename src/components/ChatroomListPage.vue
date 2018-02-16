<template>
<div class="chatroom-top">
  <chatroom-create></chatroom-create>
  <chatroom-list-signboard></chatroom-list-signboard>
</div>
</template>

<script>
import ChatroomListSignboard from '../components/ChatroomListSignboard'
import ChatroomCreate from '../components/ChatroomCreate'

export default {
  name: 'chatroomListPage',
  components: {
    'chatroom-list-signboard': ChatroomListSignboard,
    'chatroom-create': ChatroomCreate
  }
}
</script>

<style lang="stylus" scoped>
.chatroom-top
  position relative
  width 100%
  max-width 1280px
  height 100%
  margin 0 auto
</style>
