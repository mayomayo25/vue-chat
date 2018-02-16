<template>
  <p>改装中!</p>
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
