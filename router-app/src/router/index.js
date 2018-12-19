import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Portfolio from '@/components/Portfolio'
import Stocks from '@/components/Stocks'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/',
      name: 'Stocks',
      component: Stocks
    },
  ]
})
