import router from "@/router";
import store from "@/store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/TokenHelper"; // getToken from cookie
NProgress.configure({ showSpinner: false }); // NProgress Configuration
/**
 * 引用esri的api初始化接口
 */
/*import { initEsriApi } from '@/utils/mapApi'*/

/**
 * 匹配权限
 * @param userPerms 用户拥有的权限集合，后台返回来，存在vuex，数据类型是数组
 * @param routerPerm 定义的src/router/index.js的路由表asyncRouterMap中
 * @returns {*}
 */
function hasPermission(userPerms, routerPerm) {
  //特殊值，*代表所有资源权限
  if (userPerms.some(p => p.val == "*")) return true;
  //如果菜单路由上没有声明perm属性，默认显示该菜单，代表所有人可以访问
  if (!routerPerm) return true;
  //判断用户的资源权限集合中是否包含该菜单路由声明的资源权限
  return userPerms.some(p => p.val == routerPerm);
}

//每次路由跳转前，开启进度条，获取token，并进行下面一系列操作
router.beforeEach((to, from, next) => {
  NProgress.start();
  //对esri的api进行初始化
  store.dispatch("Init_Api").then(() => {
    next();
  });
});

//关闭进度条
router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
