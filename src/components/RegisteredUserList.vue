<template>
<ul is="transition-group">
  <li v-for="user in list" class="user" :key="user.name">
    <span>{{user.name}} - {{user.email}}</span>
    <button v-on:click="removeUser(user)">X</button>
  </li>
</ul>
</template>

<script>
import firebase from 'firebase'

// users以下を全て取得
var usersRef = firebase.database().ref('users')

export default {
  name: 'registeredUserList',
  data: function () {
    return {
      list: []
    }
  },
  created () {
    this.listenList()
  },
  methods: {
    removeUser: function (user) {
      usersRef.child(user['.key']).remove()
    },
    listenList: function () {
      usersRef.on('value', snapshot => {
        if (snapshot) {
          const rootList = snapshot.val()
          let list = []
          // データオブジェクトを配列に変更する
          Object.keys(rootList).forEach((val, key) => {
            rootList[val].id = val
            list.push(rootList[val])
          })
          // vueのdataに突っ込む
          this.list = list
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
ul
  padding 0

.user
  display block
  height 30px
  padding 10px
  line-height 30px
  border-top 1px solid #eee
  overflow hidden
  transition all .25s ease
  &:last-child
    border-bottom 1px solid #eee
.v-enter, .v-leave-active
  height 0
  padding-top 0
  padding-bottom 0
  border-top-width 0
  border-bottom-width 0
</style>
