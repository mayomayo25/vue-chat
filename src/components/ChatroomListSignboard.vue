<template>
  <div class="chatroom-top-signboard shadow-normal">
    <ul class="tile">
      <li class="tile-card-unit shadow-normal" v-for="room in list" :key="room.name">
        <span class="room-name">{{ room.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'

// users以下を全て取得
var roomsRef = firebase.database().ref('rooms')

export default {
  name: 'chatroomListSignboard',
  data: function () {
    return {
      list: []
    }
  },
  created () {
    this.listenList()
  },
  methods: {
    listenList: function () {
      roomsRef.on('value', snapshot => {
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

<style lang="stylus">
.chatroom-top-signboard
  overflow-y scroll
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  width 80%
  max-width 1200px
  height 80%
  max-height 700px
  margin auto
  padding 2%
  box-sizing border-box
  border-radius 20px
  background-color #f5f5f5
  .tile
    display flex
    flex-flow row wrap
    justify-content center
    &-card-unit
      width 220px
      height 220px
      margin 10px
      border-radius 10px
      transition all .2s linear
      &.is-empty
        height 0
        padding-top 0
        padding-bottom 0
        margin-top 0
        margin-bottom 0
.v-enter, .v-leave-active
  height 0
  padding-top 0
  padding-bottom 0
  border-top-width 0
  border-bottom-width 0
</style>
