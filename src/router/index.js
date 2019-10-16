import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/main/main-page'
import EmptyPage from '@/views/main/empty-page'

Vue.use(Router)


/**
 * 1.不需要渲染到菜单中的路由(包含子路由),添加hideInMenu:true
 * 2.有name属性(且hideInMenu不等于true)的路由才会被渲染到菜单组件上
 * 3.希望子路由不被渲染到菜单组件上,添加hideChildrenInMenu:true
 * 4.使用meta元信息,对路由设置菜单图标和title等属性
 */

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      hideInMenu: true,
      component: ()=>import('@/views/login/login')
    },
    {
      path: '/main',
      name: 'MainPage',
      hideInMenu: true,
      component: MainPage,
      children: [
        {
          path: 'home',
          name: 'Home',
          meta: {
            title: '首页',
            icon: 'md-home'
          },
          component: () => import('@/views/main/home-page/home-page'),
          children:[]
        },
        {
          path: 'user',
          name: 'User',
          meta: {
            title: '用户',
            icon: 'ios-people'
          },
          component: EmptyPage,
          children:[
            {
              path: 'list',
              name: 'UserList',
              meta: {
                title: '用户列表',
                icon: 'md-home'
              },
              component: () => import('@/views/main/user-page/user-list')
            },
            {
              path: 'statistics',
              name: 'UserStatistics',
              meta: {
                title: '用户统计',
                icon: 'md-home'
              },
              component: () => import('@/views/main/user-page/user-statistics')
            }
          ]
        },
        {
          path: 'doc',
          name: 'Doc',
          meta: {
            title: '文档',
            icon: 'ios-book'
          },
          component: EmptyPage ,
          children:[
            {
              path: 'list',
              name: 'DocList',
              meta: {
                title: '文档列表',
                icon: 'md-home'
              },
              component: () => import('@/views/main/doc-page/doc-list')
            },
            {
              path: 'statistics',
              name: 'DocStatistics',
              meta: {
                title: '文档统计',
                icon: 'md-home'
              },
              component: () => import('@/views/main/doc-page/doc-statistics')
            }
          ]
        },
      ]
    }
  ]
})
