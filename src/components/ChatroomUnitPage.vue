<template>
<div class="chatroom-unit shadow-deep">
  <h2 class="chatroom-unit-name">
    {{ roomName }}
    <router-link tag="div" to="/chatroom_list" class="prev-button">
      <i class="material-icons">arrow_back</i>
    </router-link>
    <div class="scroll-bottom-button" v-on:click="scrollToEnd">
      <i class="material-icons">expand_more</i>
    </div>
  </h2>
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
  methods: {
    // bug : cannot scroll to bottom
    scrollToEnd: function () {
      var container = document.getElementsByClassName('list-view')
      console.log(container)
      console.log(container[0].scrollHeight)
      document.getElementsByClassName('message-list').scrollTop = container[0].scrollHeight
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
  top 20px
  right 0
  bottom 0
  left 0
  width 100%
  max-width 600px
  height calc(100vh - 80px - 80px)
  max-height 700px
  margin auto
  border-radius 20px
  background-color #f5f5f5
  @media (max-width 980px)
    width 90%
  &-name
    position relative
    width 100%
    height 80px
    line-height 80px
    border-radius 20px 20px 0 0
    font-size 30px
    font-weight bold
    color #f5f5f5
    background-color #009688
    @media (max-width 480px)
      height 60px
      line-height 60px
      font-size 26px
    .prev-button,.scroll-bottom-button
      position absolute
      top 20px
      bottom 20px
      width 40px
      height 40px
      line-height 40px
      cursor pointer
      @media (max-width 480px)
        top 10px
        bottom 10px
      .material-icons
        font-size 30px
        line-height 40px
    .prev-button
      left 20px
      @media (max-width 480px)
        left 20px
    .scroll-bottom-button
      right 20px
      border-radius 50%
      background-color #4aaaf6
      @media (max-width 480px)
        right 20px
</style>
