/* eslint-disable quotes */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "Nav"
    },
    {
      path: '/Nav',
      component: Nav
    },
    {
      path: '/HelloWorld',
      component: HelloWorld
    }
  ]
})
