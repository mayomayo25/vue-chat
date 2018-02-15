<template>
<div class="chatroom-unit shadow-deep">
  <h2 class="chatroom-unit-name">{{ roomName }}</h2>
  <message-list-view :room-name="this.$route.params.roomName"></message-list-view>
  <message-input-form :room-name="this.$route.params.roomName"></message-input-form>
</div>
</template>

<script>
import messageListView from '../components/ChatroomMessageListView'
import messageInputForm from '../components/ChatroomMessageInputForm'

export default {
  name: 'chatroomUnitPage',
  data: function () {
    return {
      roomName: this.$route.params.roomName
    }
  },
  components: {
    'message-list-view': messageListView,
    'message-input-form': messageInputForm
  }
}
</script>

<style lang="stylus">
.chatroom-unit
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  width 100%
  max-width 600px
  height 80%
  max-height 700px
  margin auto
  border-radius 20px
  background-color #f5f5f5
  &-name
    position absolute
    width 100%
    height 80px
    line-height 80px
    border-radius 20px 20px 0 0
    font-size 30px
    font-weight bold
    color #f5f5f5
    background-color #009688
</style>
