<template>
  <form id="form" v-on:submit.prevent="addRoom">
    <input type="text" name="room_name" v-model="newRoom.name" placeholder="Please write your room name">
    <button type="submit" v-on:click="addRoom">Create</button>
  </form>
</template>

<script>
import firebase from 'firebase'

// rooms以下を全て取得
var roomsRef = firebase.database().ref('rooms')

export default {
  name: 'SiteTopPage',
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
</style>
