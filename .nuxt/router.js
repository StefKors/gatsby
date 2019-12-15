import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5fe4a836 = () => interopDefault(import('../pages/publication-1/index.vue' /* webpackChunkName: "pages/publication-1/index" */))
const _6d9f2c16 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/publication-1",
    component: _5fe4a836,
    name: "publication-1"
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
