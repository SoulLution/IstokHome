import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _50b1a3ce = () => interopDefault(import('../pages/chat.vue' /* webpackChunkName: "pages/chat" */))
const _6edd0ef8 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _9946026a = () => interopDefault(import('../pages/partner/applications.vue' /* webpackChunkName: "pages/partner/applications" */))
const _4bc48c32 = () => interopDefault(import('../pages/partner/edit.vue' /* webpackChunkName: "pages/partner/edit" */))
const _4cc1959e = () => interopDefault(import('../pages/partner/profile.vue' /* webpackChunkName: "pages/partner/profile" */))
const _02542b36 = () => interopDefault(import('../pages/partner/sign.vue' /* webpackChunkName: "pages/partner/sign" */))
const _b923c8c0 = () => interopDefault(import('../pages/partner/top/index.vue' /* webpackChunkName: "pages/partner/top/index" */))
const _21be1e8a = () => interopDefault(import('../pages/project/request/buy/_id.vue' /* webpackChunkName: "pages/project/request/buy/_id" */))
const _e2bed780 = () => interopDefault(import('../pages/partner/about/_id.vue' /* webpackChunkName: "pages/partner/about/_id" */))
const _5710d3cc = () => interopDefault(import('../pages/partner/project/_id.vue' /* webpackChunkName: "pages/partner/project/_id" */))
const _7d0e8608 = () => interopDefault(import('../pages/partner/top/_id.vue' /* webpackChunkName: "pages/partner/top/_id" */))
const _ba8b5cda = () => interopDefault(import('../pages/project/request/_id.vue' /* webpackChunkName: "pages/project/request/_id" */))
const _3c154b57 = () => interopDefault(import('../pages/designer/_id.vue' /* webpackChunkName: "pages/designer/_id" */))
const _02ae7213 = () => interopDefault(import('../pages/project/_id.vue' /* webpackChunkName: "pages/project/_id" */))
const _6c6e20c9 = () => interopDefault(import('../pages/result/_id.vue' /* webpackChunkName: "pages/result/_id" */))
const _e1a7593e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _50b1a3ce,
    name: "chat"
  }, {
    path: "/profile",
    component: _6edd0ef8,
    name: "profile"
  }, {
    path: "/partner/applications",
    component: _9946026a,
    name: "partner-applications"
  }, {
    path: "/partner/edit",
    component: _4bc48c32,
    name: "partner-edit"
  }, {
    path: "/partner/profile",
    component: _4cc1959e,
    name: "partner-profile"
  }, {
    path: "/partner/sign",
    component: _02542b36,
    name: "partner-sign"
  }, {
    path: "/partner/top",
    component: _b923c8c0,
    name: "partner-top"
  }, {
    path: "/project/request/buy/:id?",
    component: _21be1e8a,
    name: "project-request-buy-id"
  }, {
    path: "/partner/about/:id?",
    component: _e2bed780,
    name: "partner-about-id"
  }, {
    path: "/partner/project/:id?",
    component: _5710d3cc,
    name: "partner-project-id"
  }, {
    path: "/partner/top/:id",
    component: _7d0e8608,
    name: "partner-top-id"
  }, {
    path: "/project/request/:id?",
    component: _ba8b5cda,
    name: "project-request-id"
  }, {
    path: "/designer/:id?",
    component: _3c154b57,
    name: "designer-id"
  }, {
    path: "/project/:id?",
    component: _02ae7213,
    name: "project-id"
  }, {
    path: "/result/:id?",
    component: _6c6e20c9,
    name: "result-id"
  }, {
    path: "/",
    component: _e1a7593e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
