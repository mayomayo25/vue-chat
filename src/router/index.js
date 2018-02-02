import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CountUpDown from '@/components/CountUpDown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CountUpDown',
      name: 'CountUpDown',
      component: CountUpDown
    }
  ]
})
