<template>
  <div class="chatroom-top-signboard shadow-normal">
    <ul class="tile">
      <router-link class="tile-card-unit shadow-normal" tag="li" :to="{ name: 'ChatroomUnitPage', params: { roomName: room.name } }" v-for="room in list" :key="room.name">
        <div class="room-label">
          <span class="room-name">{{ room.name }}</span>
        </div>
        <div class="forum-icon">
          <i class="material-icons">forum</i>
        </div>
        <div class="creator-label">
          <span class="creator-name">by {{ room.createUser }}</span>
        </div>
      </router-link>
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
  height calc(100% - 80px - 80px - 20px)
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
      position relative
      width 220px
      height 220px
      margin 10px
      border-radius 10px
      font-weight bold
      color #009688
      background-color #E0F2F1
      cursor pointer
      transition background-color .2s linear
      @media (max-width 480px)
        width 90%
        height 100px
      &:hover
        background-color #f2e7e0
      &.is-empty
        height 0
        padding-top 0
        padding-bottom 0
        margin-top 0
        margin-bottom 0
      .room-label
        position absolute
        top 20px
        width 100%
        height 40px
        line-height 40px
        background-color #26addf
        @media (max-width 480px)
          top 35px
          right 0
          width 80%
          height 30px
          line-height 30px
        .room-name
          font-weight bold
          color #f5f5f5
      .creator-label
        position absolute
        right 0
        bottom 10px
        left 0
        width 90%
        margin auto
        @media (max-width 480px)
          text-align right
      .forum-icon
        position absolute
        top 30px
        right 0
        bottom 0
        left 0
        width 100px
        height 100px
        margin auto
        border-radius 50%
        background-color #26addf
        @media (max-width 480px)
          z-index 10
          top 15px
          bottom 15px
          left -220px
          width 70px
          height 70px
          margin auto
        .material-icons
          line-height 100px
          font-size 50px
          color #f5f5f5
          @media (max-width 480px)
            line-height 70px
            font-size 40px
.v-enter, .v-leave-active
  height 0
  padding-top 0
  padding-bottom 0
  border-top-width 0
  border-bottom-width 0
</style>
