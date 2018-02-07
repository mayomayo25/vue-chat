import Vue from 'vue'
import Router from 'vue-router'
import ChatUserCreatePage from '@/components/ChatUserCreatePage'
import SiteTopPage from '@/components/SiteTopPage'
import LoginMenuPage from '@/components/LoginMenuPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SiteTopPage',
      component: SiteTopPage
    },
    {
      path: '/ChatUserCreatePage',
      name: 'ChatUserCreatePage',
      component: ChatUserCreatePage
    },
    {
      path: '/login',
      name: 'LoginMenuPage',
      component: LoginMenuPage
    }
  ]
})
