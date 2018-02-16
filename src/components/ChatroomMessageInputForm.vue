<template>
<form class="room-message-form" v-on:submit.prevent="sendMessage">
  <textarea class="send-message-textarea" type="text" placeholder="Input your message." v-model="newMessage.text">
  </textarea>
  <button class="send-button" type="submit">Send</button>
</form>
</template>

<script>
import firebase from 'firebase'

// rooms以下を全て取得
var messagesRef = firebase.database().ref('messages')

export default {
  name: 'ChatroomMessageInputForm',
  data: function () {
    return {
      newMessage: {
        roomName: this.roomName,
        sender: this.$store.state.email,
        date: this.$moment().format('YYYY/MM/DD HH:mm'),
        text: ''
      }
    }
  },
  props: [
    'roomName'
  ],
  firebase: {
    messages: messagesRef
  },
  computed: {
    validation: function () {
      return {
        name: !!this.newMessage.text.trim()
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  methods: {
    sendMessage: function () {
      if (this.isValid) {
        messagesRef.push(this.newMessage)
        this.newMessage.text = ''
      }
    }
  }
}
</script>

<style lang="stylus">
.room-message-form
  display flex
  position absolute
  bottom 0
  width 100%
  height 80px
  padding 20px 40px
  box-sizing border-box
  border-radius 0 0 20px 20px
  background-color #009688
  @media (max-width 480px)
    height 60px
    padding 10px 20px
  .send-message-textarea
    width 70%
    padding-left 15px
    line-height 34px
    border none
    border-radius 5px
    font-size 16px
    resize none
  .send-button
    width 25%
    margin-left 5%
    padding 0
    border none
    border-radius 5px
    font-size 16px
    font-weight bold
    color #f5f5f5
    background-color #4aaaf6
    cursor pointer
    outline none
    appearance none
</style>
