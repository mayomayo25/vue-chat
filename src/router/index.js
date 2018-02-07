import Vue from 'vue'
import Router from 'vue-router'
import ChatUserCreateMain from '@/components/ChatUserCreateMain'
import LoginMenu from '@/components/LoginMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ChatUserCreateMain',
      name: 'ChatUserCreateMain',
      component: ChatUserCreateMain
    },
    {
      path: '/login',
      name: 'LoginMenu',
      component: LoginMenu
    }
  ]
})
