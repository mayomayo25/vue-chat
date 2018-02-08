<template>
<div>
  <form id="form" v-on:submit="addUser">
    <input type="email" v-model="newUser.email" placeholder="email">
    <input type="password" v-model="newUser.password" placeholder="password">
    <button type="button" v-on:click="addUser">Confirm</button>
  </form>
  <!-- <ul class="errors">
    <li v-show="!validation.name">Name cannot be empty.</li>
    <li v-show="!validation.email">Please provide a valid email address.</li>
  </ul> -->
</div>
</template>

<script>
import firebase from 'firebase'

// users以下を全て取得
// var usersRef = firebase.database().ref('users')

export default {
  name: 'ChatUserCreate',
  data: function () {
    return {
      newUser: {
        email: '',
        password: ''
      }
    }
  },
  // computed: {
  //   validation: function () {
  //     return {
  //       name: !!this.newUser.name.trim(),
  //       email: emailRE.test(this.newUser.email)
  //     }
  //   },
  //   isValid: function () {
  //     var validation = this.validation
  //     return Object.keys(validation).every(function (key) {
  //       return validation[key]
  //     })
  //   }
  // },
  methods: {
    addUser: function () {
      firebase.auth().createUserWithEmailAndPassword(this.newUser.email, this.newUser.password).then(
        user => {
          alert('Create account: ', user.email)
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.errors
  color #f00
</style>
