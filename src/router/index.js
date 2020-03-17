import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/article'
import {blogHeader, blogFooter, blogHome, blogSidebar, blogTags, blogIndex} from '@/layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/index',
      component: blogIndex,
      children: [
        {
          path: 'index',
          components: {
            header: blogHeader,
            main: blogHome,
            footer: blogFooter,
            sidebar: blogSidebar
          }
        },
        {
          path: 'tags',
          components: {
            header: blogHeader,
            main: blogTags,
            footer: blogFooter,
            sidebar: blogSidebar
          }
        },
        {
          path: 'life',
          components: {
            header: blogHeader,
            main: blogTags,
            footer: blogFooter,
            sidebar: blogSidebar
          }
        },
        {
          path: 'article/:post_id',
          components: {
            header: blogHeader,
            main: Article,
            footer: blogFooter,
            sidebar: blogSidebar
          }
        }
      ]
    },
  ]
})
