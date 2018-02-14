<template>
  <form class="uncreated-area login-menu-right">
    <h2 class="login-form-heading">Create Form</h2>
    <ul class="form-list">
      <li class="form-list-item">
        <label class="info-name" for="">emailaddress</label>
        <input class="input-field" type="email" v-model="User.email" placeholder="Choose your Email" required>
      </li>
      <li class="form-list-item">
        <label class="info-name" for="">your password</label>
        <input class="input-field" type="password" v-model="User.password" placeholder="Choose your password" required>
      </li>
    </ul>
    <button class="login-confirm-button" type="button" v-on:click="checkUser">Create</button>
  </form>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'uncreatedUserZone',
  data: function () {
    return {
      User: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    checkUser: function () {
      firebase.auth().createUserWithEmailAndPassword(this.User.email, this.User.password).then(
        user => {
          alert('User Add Complete!')

          // 新規登録後 ログイン処理
          firebase.auth().signInWithEmailAndPassword(this.User.email, this.User.password).then(
            user => {
              alert('Login Complete!')
              this.$store.dispatch('setLoginFlag', true)
              this.$store.dispatch('setUserEmail', this.User.email)
              this.$router.push('/')
            },
            err => {
              alert(err.message)
              this.$store.dispatch('setLoginFlag', false)
              this.$store.dispatch('setUserEmail', '')
            }
          )
        },
        err => {
          alert(err.message)
          this.$store.dispatch('setLoginFlag', false)
        }
      )
    }
  }
}
</script>

<style lang="stylus">
.uncreated-area
  position relative
  &-heading
    padding-bottom 30px
    box-sizing border-box
    text-align center
    font-size 32px
    font-weight bold
    color #004D40
  .form-list
    &-item
      width 100%
      margin-bottom 10px
      &:last-child
        margin-bottom 0
      .info-name
        display block
        margin-bottom 10px
        text-align left
        font-weight bold
      .input-field
        width 100%
        height 45px
        padding-left 20px
        box-sizing border-box
        font-size 18px
  .login-confirm-button
    position absolute
    right 0
    bottom 20px
    left 0
    width 200px
    height 50px
    margin auto
    padding 0
    border none
    line-height 50px
    font-size 20px
    font-weight bold
    color #f5f5f5
    background-color #f49921
    cursor pointer
    outline none
    appearance none
</style>
