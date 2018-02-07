<template>
<div>
  <form id="form" v-on:submit.prevent="addUser">
    <input type="text" v-model="newUser.name" placeholder="Username">
    <input type="email" v-model="newUser.email" placeholder="email@email.com">
    <input type="submit" value="Add User">
  </form>
  <ul class="errors">
    <li v-show="!validation.name">Name cannot be empty.</li>
    <li v-show="!validation.email">Please provide a valid email address.</li>
  </ul>
</div>
</template>

<script>
import firebase from 'firebase'

// users以下を全て取得
var usersRef = firebase.database().ref('users')

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line

export default {
  name: 'ChatUserCreate',
  data: function () {
    return {
      newUser: {
        name: '',
        email: ''
      }
    }
  },
  computed: {
    validation: function () {
      return {
        name: !!this.newUser.name.trim(),
        email: emailRE.test(this.newUser.email)
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
    addUser: function () {
      if (this.isValid) {
        usersRef.push(this.newUser)
        this.newUser.name = ''
        this.newUser.email = ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.errors
  color #f00
</style>
