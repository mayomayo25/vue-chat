<template>
<div class="message-list">
  <ul class="list-view">
    <transition-group>
      <li class="list-view-item" v-bind:class="{byMe: message.sender == email}" v-for="message in list" :key="message.id">
        <!-- <span v-html="message.text"></span> -->
        <span>{{ message.text }}</span>
        <p class="tag" for="">
          <span class="tag-date">{{ message.date }}</span>
          <span class="tag-sender">by: {{ message.sender }}</span>
        </p>
      </li>
    </transition-group>
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
  @media (max-width 480px)
    top 60px
    height calc(100% - 120px)
  .list-view
    padding 20px
    box-sizing border-box
    &-item
      position relative
      width 60%
      height auto
      margin-right auto
      margin-bottom 40px
      margin-left 0
      padding 15px
      box-sizing border-box
      border-radius 5px
      text-align left
      font-weight bold
      color #f5f5f5
      background-color #f99543
      white-space pre-wrap
      @media (max-width 480px)
        width 70%
      span
        word-break break-word
      .tag
        position absolute
        right 0
        bottom -15px
        max-width 100%
        padding 0 15px
        box-sizing border-box
        font-size 12px
        color #555
        overflow hidden
        text-overflow ellipsis
        white-space nowrap

    &-item.byMe
      margin-right 0
      margin-left auto
      text-align left
      background-color #43a2f9
.v-enter-active {
  transition: all .8s ease;
}

.v-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.v-enter, .v-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
