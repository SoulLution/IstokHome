import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _36398e32 = () => interopDefault(import('..\\pages\\chat.vue' /* webpackChunkName: "pages_chat" */))
const _4a8be782 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))
const _62f66c81 = () => interopDefault(import('..\\pages\\partner\\applications.vue' /* webpackChunkName: "pages_partner_applications" */))
const _fa2be030 = () => interopDefault(import('..\\pages\\partner\\edit.vue' /* webpackChunkName: "pages_partner_edit" */))
const _50398dbb = () => interopDefault(import('..\\pages\\partner\\profile.vue' /* webpackChunkName: "pages_partner_profile" */))
const _35fb6e1b = () => interopDefault(import('..\\pages\\partner\\sign.vue' /* webpackChunkName: "pages_partner_sign" */))
const _5a48c63b = () => interopDefault(import('..\\pages\\partner\\top\\index.vue' /* webpackChunkName: "pages_partner_top_index" */))
const _e5652038 = () => interopDefault(import('..\\pages\\project\\request\\buy\\_id.vue' /* webpackChunkName: "pages_project_request_buy__id" */))
const _0b9d7eab = () => interopDefault(import('..\\pages\\partner\\about\\_id.vue' /* webpackChunkName: "pages_partner_about__id" */))
const _0d693b1f = () => interopDefault(import('..\\pages\\partner\\project\\_id.vue' /* webpackChunkName: "pages_partner_project__id" */))
const _54391b63 = () => interopDefault(import('..\\pages\\partner\\top\\_id.vue' /* webpackChunkName: "pages_partner_top__id" */))
const _ede5170c = () => interopDefault(import('..\\pages\\project\\request\\_id.vue' /* webpackChunkName: "pages_project_request__id" */))
const _649ff345 = () => interopDefault(import('..\\pages\\designer\\_id.vue' /* webpackChunkName: "pages_designer__id" */))
const _1271a1ca = () => interopDefault(import('..\\pages\\project\\_id.vue' /* webpackChunkName: "pages_project__id" */))
const _031b21d3 = () => interopDefault(import('..\\pages\\result\\_id.vue' /* webpackChunkName: "pages_result__id" */))
const _02e5f668 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/chat",
      component: _36398e32,
      name: "chat"
    }, {
      path: "/profile",
      component: _4a8be782,
      name: "profile"
    }, {
      path: "/partner/applications",
      component: _62f66c81,
      name: "partner-applications"
    }, {
      path: "/partner/edit",
      component: _fa2be030,
      name: "partner-edit"
    }, {
      path: "/partner/profile",
      component: _50398dbb,
      name: "partner-profile"
    }, {
      path: "/partner/sign",
      component: _35fb6e1b,
      name: "partner-sign"
    }, {
      path: "/partner/top",
      component: _5a48c63b,
      name: "partner-top"
    }, {
      path: "/project/request/buy/:id?",
      component: _e5652038,
      name: "project-request-buy-id"
    }, {
      path: "/partner/about/:id?",
      component: _0b9d7eab,
      name: "partner-about-id"
    }, {
      path: "/partner/project/:id?",
      component: _0d693b1f,
      name: "partner-project-id"
    }, {
      path: "/partner/top/:id",
      component: _54391b63,
      name: "partner-top-id"
    }, {
      path: "/project/request/:id?",
      component: _ede5170c,
      name: "project-request-id"
    }, {
      path: "/designer/:id?",
      component: _649ff345,
      name: "designer-id"
    }, {
      path: "/project/:id?",
      component: _1271a1ca,
      name: "project-id"
    }, {
      path: "/result/:id?",
      component: _031b21d3,
      name: "result-id"
    }, {
      path: "/",
      component: _02e5f668,
      name: "index"
    }, {
      path: "*",
      component: _35fb6e1b,
      name: "custom"
    }],

    fallback: false
  })
}
