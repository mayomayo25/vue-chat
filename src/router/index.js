import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import ChatUserCreatePage from '@/components/ChatUserCreatePage'
import SiteTopPage from '@/components/SiteTopPage'
import LoginMenuPage from '@/components/LoginMenuPage'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/',
      name: 'SiteTopPage',
      component: SiteTopPage,
      meta: {
        requiresAuth: true
      }
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

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    // ログインされているか認証
    // もしされていないならば、ログインページにリダイレクトします。
    if (!currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
