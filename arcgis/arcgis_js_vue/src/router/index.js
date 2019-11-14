import Vue from "vue";
import Router from "vue-router";
const _import = require("./_import_" + process.env.NODE_ENV);
const devEnv = require("../../config/dev.env.js");
Vue.use(Router);

export const constantRouterMap = [
  {
    path: "/",
    redirect: "/test"
  },
  {
      path: "/test",
      component: _import("views/test/index"),
      name: "test",
      meta: {
          title: "test",
          menuIndex: 0
      }
  }
];

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];
