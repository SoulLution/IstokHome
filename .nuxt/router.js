import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c360b99 = () => interopDefault(import('../pages/chat.vue' /* webpackChunkName: "pages/chat" */))
const _6c3f4178 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _4580dc4b = () => interopDefault(import('../pages/partner/applications.vue' /* webpackChunkName: "pages/partner/applications" */))
const _ef442c9c = () => interopDefault(import('../pages/partner/edit.vue' /* webpackChunkName: "pages/partner/edit" */))
const _5632309e = () => interopDefault(import('../pages/partner/profile.vue' /* webpackChunkName: "pages/partner/profile" */))
const _3b6f47e5 = () => interopDefault(import('../pages/partner/sign.vue' /* webpackChunkName: "pages/partner/sign" */))
const _28d9a3c0 = () => interopDefault(import('../pages/partner/top/index.vue' /* webpackChunkName: "pages/partner/top/index" */))
const _c5295dec = () => interopDefault(import('../pages/project/request/buy/_id.vue' /* webpackChunkName: "pages/project/request/buy/_id" */))
const _5274b280 = () => interopDefault(import('../pages/partner/about/_id.vue' /* webpackChunkName: "pages/partner/about/_id" */))
const _2a3b464c = () => interopDefault(import('../pages/partner/project/_id.vue' /* webpackChunkName: "pages/partner/project/_id" */))
const _78563888 = () => interopDefault(import('../pages/partner/top/_id.vue' /* webpackChunkName: "pages/partner/top/_id" */))
const _75e4c413 = () => interopDefault(import('../pages/project/request/_id.vue' /* webpackChunkName: "pages/project/request/_id" */))
const _78aea8d7 = () => interopDefault(import('../pages/designer/_id.vue' /* webpackChunkName: "pages/designer/_id" */))
const _46b36493 = () => interopDefault(import('../pages/project/_id.vue' /* webpackChunkName: "pages/project/_id" */))
const _1a7e436e = () => interopDefault(import('../pages/result/_id.vue' /* webpackChunkName: "pages/result/_id" */))
const _a70db43e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/chat",
    component: _4c360b99,
    name: "chat"
  }, {
    path: "/profile",
    component: _6c3f4178,
    name: "profile"
  }, {
    path: "/partner/applications",
    component: _4580dc4b,
    name: "partner-applications"
  }, {
    path: "/partner/edit",
    component: _ef442c9c,
    name: "partner-edit"
  }, {
    path: "/partner/profile",
    component: _5632309e,
    name: "partner-profile"
  }, {
    path: "/partner/sign",
    component: _3b6f47e5,
    name: "partner-sign"
  }, {
    path: "/partner/top",
    component: _28d9a3c0,
    name: "partner-top"
  }, {
    path: "/project/request/buy/:id?",
    component: _c5295dec,
    name: "project-request-buy-id"
  }, {
    path: "/partner/about/:id?",
    component: _5274b280,
    name: "partner-about-id"
  }, {
    path: "/partner/project/:id?",
    component: _2a3b464c,
    name: "partner-project-id"
  }, {
    path: "/partner/top/:id",
    component: _78563888,
    name: "partner-top-id"
  }, {
    path: "/project/request/:id?",
    component: _75e4c413,
    name: "project-request-id"
  }, {
    path: "/designer/:id?",
    component: _78aea8d7,
    name: "designer-id"
  }, {
    path: "/project/:id?",
    component: _46b36493,
    name: "project-id"
  }, {
    path: "/result/:id?",
    component: _1a7e436e,
    name: "result-id"
  }, {
    path: "/",
    component: _a70db43e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
