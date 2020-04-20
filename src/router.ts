import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './views/Article.vue'
import PageNotFound from './views/404.vue'

import AuthService from './services/AuthService'

Vue.use(Router)


const router=new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:link',
      name: 'article',
      component: Article,
      meta: {
        isSecure: true,
      }
    },
    { path: "*", component: PageNotFound }
    
  ]
});

router.beforeEach((to, from, next) => {
  const authService: AuthService = new AuthService();
  if (to.matched.some(record => record.meta.isSecure)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    authService.isLoggedIn().then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        next();
      } else {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        });
      }
    });
  } else {
    next();
  }
})
export default router;