<template>
<div class="create-room">
  <form id="form" class="create-room-form" v-on:submit.prevent="addRoom">
    <input class="room-name-input" type="text" name="room_name" v-model="newRoom.name" placeholder="Please write room name">
    <button class="room-create-button" type="submit" v-on:click="addRoom">Create</button>
  </form>
</div>
</template>

<script>
import firebase from 'firebase'

// rooms以下を全て取得
var roomsRef = firebase.database().ref('rooms')

export default {
  name: 'chatroomCreate',
  data: function () {
    return {
      newRoom: {
        name: '',
        createUser: this.$store.state.email
      }
    }
  },
  firebase: {
    rooms: roomsRef
  },
  computed: {
    validation: function () {
      return {
        name: !!this.newRoom.name.trim()
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
    addRoom: function () {
      if (this.isValid) {
        roomsRef.push(this.newRoom)
        this.newRoom.name = ''
      }
    }
  }
}
</script>

<style lang="stylus">
.create-room
  position absolute
  top 25px
  right 0
  left 0
  width 80%
  margin auto
  &-form
    display flex
    width 50%
    height 40px
    margin-right 0
    margin-left auto
    @media (max-width 980px)
      width 70%
    @media (max-width 480px)
      width 100%
    .room-name-input
      width 78%
      height 100%
      margin-right 2%
      padding-left 10px
      border 1px solid #eee
      box-sizing border-box
      border-radius 10px
      font-size 16px
    .room-create-button
      width 100px
      height 100%
      border none
      border-radius 10px
      font-size 16px
      font-weight bold
      color #f5f5f5
      background-color #ff9162
      cursor pointer
      outline none
      appearance none
</style>
