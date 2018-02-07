<template>
<div>
  <registered-user-list></registered-user-list>
  <chat-user-create></chat-user-create>
</div>
</template>

<script>
import firebase from 'firebase'
import RegisteredUserList from '../components/RegisteredUserList'
import ChatUserCreate from '../components/ChatUserCreate'

// users以下を全て取得
var usersRef = firebase.database().ref('users')

export default {
  name: 'ChatMainPage',
  data: function () {
    return {
      newUser: {
        name: '',
        email: ''
      }
    }
  },
  firebase: {
    users: usersRef
  },
  components: {
    'ChatUserCreate': ChatUserCreate,
    'RegisteredUserList': RegisteredUserList
  }
}
</script>

<style lang="stylus">
</style>
