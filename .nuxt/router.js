import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e165d138 = () => interopDefault(import('..\\pages\\browse\\index.vue' /* webpackChunkName: "pages/browse/index" */))
const _5f4b021d = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _3bdd211a = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _19e3e97e = () => interopDefault(import('..\\pages\\browse\\components\\UserFrame.vue' /* webpackChunkName: "pages/browse/components/UserFrame" */))
const _9add2476 = () => interopDefault(import('..\\pages\\posts\\components\\Post.vue' /* webpackChunkName: "pages/posts/components/Post" */))
const _3205f7ae = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/browse",
    component: _e165d138,
    name: "browse"
  }, {
    path: "/login",
    component: _5f4b021d,
    name: "login"
  }, {
    path: "/posts",
    component: _3bdd211a,
    name: "posts"
  }, {
    path: "/browse/components/UserFrame",
    component: _19e3e97e,
    name: "browse-components-UserFrame"
  }, {
    path: "/posts/components/Post",
    component: _9add2476,
    name: "posts-components-Post"
  }, {
    path: "/",
    component: _3205f7ae,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
