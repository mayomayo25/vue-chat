<template>
<div class="message-list">
  <ul class="list-view">
    <li class="list-view-item" v-bind:class="{byMe: message.sender == email}" v-for="message in list" :key="message.id">
      <!-- <span v-html="message.text"></span> -->
      <span>{{ message.text }}</span>
    </li>
  </ul>
</div>
</template>

<script>
import firebase from 'firebase'

// users以下を全て取得
var messagesRef = firebase.database().ref('messages')

export default {
  data: function () {
    return {
      list: [],
      urlRoomName: this.$route.params.roomName,
      email: this.$store.state.email
    }
  },
  props: [
    'roomName'
  ],
  created () {
    this.listenList()
  },
  methods: {
    listenList: function () {
      messagesRef.on('value', snapshot => {
        if (snapshot) {
          const rootList = snapshot.val()
          let list = []
          // データオブジェクトを配列に変更する
          Object.keys(rootList).forEach((val, key) => {
            if (rootList[val].roomName === this.urlRoomName) {
              rootList[val].id = val
              // ルーム名が同一なメッセージだけリストに抜き出し
              list.push(rootList[val])
            }
          })
          // vueのdataに突っ込む
          this.list = list
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.message-list
  overflow-y scroll
  position absolute
  top 80px
  width 100%
  height calc(100% - 160px)
  .list-view
    height 100%
    padding 20px
    box-sizing border-box
    &-item
      width 60%
      height auto
      margin-right auto
      margin-bottom 15px
      margin-left 0
      padding 15px
      box-sizing border-box
      text-align left
      font-weight bold
      color #f5f5f5
      background-color #f99543
      white-space pre-wrap
    &-item.byMe
      margin-right 0
      margin-left auto
      text-align left
      background-color #43a2f9
</style>
