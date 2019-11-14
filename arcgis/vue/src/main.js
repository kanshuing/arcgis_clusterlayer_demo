import Vue from "vue";
import App from "./App";
import router from "@/router";
import store from "@/store";
import * as filters from "@/extension/filters";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//svg icon相关
import "@/assets/icons";

import "@/extension/interceptor/route"; // permission control

import axios from "axios";
Vue.prototype.$http = axios;

//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  //Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）：
  store,
  components: { App },
  template: "<App/>"
});
