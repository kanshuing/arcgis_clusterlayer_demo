

const MapState = {
  state: {
  	//当前的地图信息
    currentMapInfo: {
    	//整个Map
      Map:null,
      //后续添加的图层,这是个数组
      mapLyrs:[],
      //用于点查询渲染的子图层
      toolBarLayers: [],
      //地图/影像的切换
      pictureLayer:false,
      //绘制的polygon
      searchPolygon:null,
      //当前工具条选择类型
      currentActionType:null
    },
  },
  mutations: {
  	SET_Map: (state, Map) => {
      state.currentMapInfo.Map = Map
   	},
    SET_MapLyrs: (state, mapLyr) => {
      state.currentMapInfo.mapLyrs.push(mapLyr)
    },
    DEL_MapLyrs: (state, index) => {
      state.currentMapInfo.mapLyrs.splice(index,1)
    },
    SET_ToolBarLayers: (state, toolBarLayers) => {
      state.currentMapInfo.toolBarLayers.push(toolBarLayers)
    },
    SET_PictureLayer: (state, pictureLayer) => {
      state.currentMapInfo.pictureLayer = pictureLayer
    },
    SET_SearchPolygon: (state, searchPolygon) => {
      state.currentMapInfo.searchPolygon = searchPolygon
    },
    SET_CurrentActionType: (state, currentActionType) => {
      state.currentMapInfo.currentActionType = currentActionType
    }
  },
  actions:{
  	    SET_Map: ({ commit },Map) => commit('SET_Map',Map),
  	    SET_MapLyrs: ({ commit },mapLyr) => commit('SET_MapLyrs',mapLyr),
  	    DEL_MapLyrs: ({ commit },index) => commit('DEL_MapLyrs',index),
  	    SET_ToolBarLayers: ({ commit },toolBarLayers) => commit('SET_ToolBarLayers',toolBarLayers),
  	    SET_PictureLayer: ({ commit },pictureLayer) => commit('SET_PictureLayer',pictureLayer),
  	    SET_SearchPolygon: ({ commit },searchPolygon) => commit('SET_SearchPolygon',searchPolygon),
  	    SET_CurrentActionType: ({ commit },currentActionType) => commit('SET_CurrentActionType',currentActionType)
  }
}

export default MapState