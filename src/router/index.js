import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Login from '@/components/Login/Login.vue'
import Register from '@/components/Register/Register.vue'
import Books from '@/components/Books/Books.vue'
import Book from '@/components/Book/Book.vue'
import BookList from '@/components/BookList/BookList.vue'
import AuthenticationService from '@/services/AuthenticationService'
import { EventBus } from '../main'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter(to, from, next) {
      checkLoginStatus(to, from, next)
      AuthenticationService.logout()
      next('/home')
    }
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/book/:bookid',
    name: 'Book',
    component: Book,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/book-list',
    name: 'BookList',
    component: BookList,
    beforeEnter: requireAuth
  }
  ]
})

function requireAuth(to, from, next) {
  checkLoginStatus(to, from, next)
  if (!AuthenticationService.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

function checkLoginStatus(to, from, next){
  EventBus.$emit('loginStatus');
  next()
}