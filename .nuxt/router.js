import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _3a95c48d = () => interopDefault(import('..\\pages\\chat.vue' /* webpackChunkName: "pages_chat" */))
const _41937404 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))
const _70af50f4 = () => interopDefault(import('..\\pages\\partner\\applications.vue' /* webpackChunkName: "pages_partner_applications" */))
const _0bf46026 = () => interopDefault(import('..\\pages\\partner\\edit.vue' /* webpackChunkName: "pages_partner_edit" */))
const _16881396 = () => interopDefault(import('..\\pages\\partner\\profile.vue' /* webpackChunkName: "pages_partner_profile" */))
const _a5d1a3c0 = () => interopDefault(import('..\\pages\\partner\\sign.vue' /* webpackChunkName: "pages_partner_sign" */))
const _f3d8a300 = () => interopDefault(import('..\\pages\\partner\\top\\index.vue' /* webpackChunkName: "pages_partner_top_index" */))
const _7a9e9fff = () => interopDefault(import('..\\pages\\project\\request\\buy\\_id.vue' /* webpackChunkName: "pages_project_request_buy__id" */))
const _376866f0 = () => interopDefault(import('..\\pages\\partner\\about\\_id.vue' /* webpackChunkName: "pages_partner_about__id" */))
const _721b2624 = () => interopDefault(import('..\\pages\\partner\\project\\_id.vue' /* webpackChunkName: "pages_partner_project__id" */))
const _57bb50e8 = () => interopDefault(import('..\\pages\\partner\\top\\_id.vue' /* webpackChunkName: "pages_partner_top__id" */))
const _24814102 = () => interopDefault(import('..\\pages\\project\\request\\_id.vue' /* webpackChunkName: "pages_project_request__id" */))
const _4888996c = () => interopDefault(import('..\\pages\\designer\\_id.vue' /* webpackChunkName: "pages_designer__id" */))
const _02e0da76 = () => interopDefault(import('..\\pages\\project\\_id.vue' /* webpackChunkName: "pages_project__id" */))
const _0bc11f18 = () => interopDefault(import('..\\pages\\result\\_id.vue' /* webpackChunkName: "pages_result__id" */))
const _ebdee926 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _3a95c48d,
      name: "chat"
    }, {
      path: "/profile",
      component: _41937404,
      name: "profile"
    }, {
      path: "/partner/applications",
      component: _70af50f4,
      name: "partner-applications"
    }, {
      path: "/partner/edit",
      component: _0bf46026,
      name: "partner-edit"
    }, {
      path: "/partner/profile",
      component: _16881396,
      name: "partner-profile"
    }, {
      path: "/partner/sign",
      component: _a5d1a3c0,
      name: "partner-sign"
    }, {
      path: "/partner/top",
      component: _f3d8a300,
      name: "partner-top"
    }, {
      path: "/project/request/buy/:id?",
      component: _7a9e9fff,
      name: "project-request-buy-id"
    }, {
      path: "/partner/about/:id?",
      component: _376866f0,
      name: "partner-about-id"
    }, {
      path: "/partner/project/:id?",
      component: _721b2624,
      name: "partner-project-id"
    }, {
      path: "/partner/top/:id",
      component: _57bb50e8,
      name: "partner-top-id"
    }, {
      path: "/project/request/:id?",
      component: _24814102,
      name: "project-request-id"
    }, {
      path: "/designer/:id?",
      component: _4888996c,
      name: "designer-id"
    }, {
      path: "/project/:id?",
      component: _02e0da76,
      name: "project-id"
    }, {
      path: "/result/:id?",
      component: _0bc11f18,
      name: "result-id"
    }, {
      path: "/",
      component: _ebdee926,
      name: "index"
    }, {
      path: "*",
      component: _ebdee926,
      name: "custom"
    }],

    fallback: false
  })
}
