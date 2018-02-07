<template>
<p>
  login
</p>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'loginMenu',
  created () {
    this.loginCheck()
  },
  method: {
    loginCheck: function () {
      firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
      })
    }
  }
}
</script>

<style lang="stylus">
</style>
