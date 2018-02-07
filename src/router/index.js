import Vue from 'vue'
import Router from 'vue-router'
import ChatUserCreateMain from '@/components/ChatUserCreateMain'
import SiteTopPage from '@/components/SiteTopPage'
import LoginMenu from '@/components/LoginMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SiteTopPage',
      component: SiteTopPage
    },
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
