import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Tags from '@/components/tags'
import Header from '@/components/header'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Sidebar from '@/components/sidebar'
import Article from '@/components/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/index',
      component: Layout,
      children: [
        {
          path: 'index',
          components: {
            header: Header,
            main: Index,
            footer: Footer,
            sidebar: Sidebar
          }
        },
        {
          path: 'tags',
          components: {
            header: Header,
            main: Tags,
            footer: Footer,
            sidebar: Sidebar
          }
        },
        {
          path: 'life',
          components: {
            header: Header,
            main: Tags,
            footer: Footer,
            sidebar: Sidebar
          }
        },
        {
          path: 'article/:post_id',
          components: {
            header: Header,
            main: Article,
            footer: Footer,
            sidebar: Sidebar
          }
        }
      ]
    },
  ]
})
