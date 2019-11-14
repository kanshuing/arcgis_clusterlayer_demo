import Vue from "vue";
import Vuex from "vuex";
//Bone——>controller

import getters from "./getters";
import arcgis from "@/bone/controller/ArcgisApi"; //初始化esri Api
import mapState from "@/bone/controller/MapState"; //地图状态
import test from "@/actions/test"; //加载测试js

Vue.use(Vuex);
//store有四个属性：state、	getters，mutations，actions
const store = new Vuex.Store({
  //modules让每一个store模块都能拥有自己的state，mutation，getters,actions,这样的方式结构更加清晰
  modules: {
    arcgis,
    mapState,
    test
  },
  getters
});

export default store;
