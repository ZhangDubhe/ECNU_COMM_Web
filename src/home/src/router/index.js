import Vue from 'vue'
import Router from 'vue-router'

// Views - Editors
import Home from '../views/home'
import TextEditors from '../views/editors/TextEditors'


// Views - Pages
// import Page404 from '@/views/pages/Page404'
// import Page500 from '@/views/pages/Page500'
// import Login from '@/views/pages/Login'
// import Register from '@/views/pages/Register'


Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/',
      name: 'Index',
      component: Home,
      children: []
    },
    {
      path: '/editors',
      redirect: '/editors/text-editors',
      name: 'Editors',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [{
        path: 'text-editors',
        name: 'Text Editors',
        component: TextEditors
      }]
    }
    // {
    //   path: '/pages',
    //   redirect: '/pages/p404',
    //   name: 'Pages',
    //   component: {
    //     render(c) {
    //       return c('router-view')
    //     }
    //   },
    //   children: [{
    //       path: '404',
    //       name: 'Page404',
    //       component: Page404
    //     },
    //     {
    //       path: '500',
    //       name: 'Page500',
    //       component: Page500
    //     },
    //     {
    //       path: 'login',
    //       name: 'Login',
    //       component: Login
    //     },
    //     {
    //       path: 'register',
    //       name: 'Register',
    //       component: Register
    //     }
    //   ]
    // }
  ]
})
