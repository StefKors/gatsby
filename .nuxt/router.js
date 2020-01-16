import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bfbec2e2 = () => interopDefault(import('../pages/writing/_.vue' /* webpackChunkName: "pages/writing/_" */))
const _6d9f2c16 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/writing/*",
    component: _bfbec2e2,
    name: "writing-all"
  }, {
    path: "/",
    component: _6d9f2c16,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
