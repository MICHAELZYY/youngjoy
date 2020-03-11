import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import tags from '@/components/tags'
import Header from '@/components/header'
import Layout from '@/components/layout'
import Footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'index',
          components: {
            header:Header, 
            main:Index,
            footer: Footer
          }
        },
      ]
    }
  ]
})
