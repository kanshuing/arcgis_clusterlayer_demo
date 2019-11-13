
const menu = {
  state: {
  	//面包屑导航栏中的地图部分
  	mapDisplay:true,
  	//左侧导航栏的显隐性
  	sideBar:"none",
  	//权限列表
  	permList:"",
  	//是否展示周边配套分析
  	supportingAnalysis:false,
  	//处理过后的权限列表
  	ProcessingPermList:"",
  	//主题颜色
  	color: "",
  	//当前激活的组件
  	currentActiveComponent:null,
  	//当前项目ID
  	projectId:null
  },
  mutations: {
  	//面包屑导航栏中的地图部分的修改
  	changeMapDisplay (state,mapDisplay) {
    	state.mapDisplay = mapDisplay
 		},
 		  	//左侧导航栏的显隐性状态的修改
 		changeSideBar (state,sideBar){
 			state.sideBar = sideBar
 		},
 		//提交权限列表
 		commitPermList (state,permList){
 			state.permList = permList
 		},
 		//是否展示周边配套分析
 		Set_SupportingAnalysis (state,SupportingAnalysis){
 			state.supportingAnalysis = SupportingAnalysis
 		},
 		//提交处理过后的权限列表
 		commitProcessingPermList (state,permList) {
 			state.ProcessingPermList = permList
 		},
 		//主题颜色的修改
 		SET_Theme (state,color) {
    	state.color = color
 		},
 		//当前处于激活状态下的组件
 		SET_CurrentActiveComponent (state,currentActiveComponent) {
    	state.currentActiveComponent = currentActiveComponent
 		},
 		//当前项目Id
 		SET_ProjectId (state,projectId) {
    	state.projectId = projectId
 		}
  },

  actions: {
  /**
   * 修改面包屑导航中的地图部分的显隐性
   */
  	changeMapDisplay:({ commit },mapDisplay) => commit('changeMapDisplay',mapDisplay), // 提交到mutations中处理
  	//是否显示左侧的侧边栏
  	changeSideBar:({ commit },sideBar) => commit('changeSideBar',sideBar),
  	//初始化时将权限数据存入state中，防止以后调用
  	commitPermList:({ commit },permList) => commit('commitPermList',permList),
  	//是否修改周边配套分析的显隐性
  	commitSupportingAnalysis:({ commit },SupportingAnalysis) => commit('Set_SupportingAnalysis',SupportingAnalysis),
  	//初始化时将处理过后的权限数据存入state中，防止以后调用
  	commitProcessingPermList:({ commit },permList) => commit('commitProcessingPermList',permList),
  	//主题颜色的修改
    SET_Theme: ({ commit },color) => commit('SET_Theme',color), // 提交到mutations中处理
    //当前激活状态下的组件
    SET_CurrentActiveComponent: ({ commit },CurrentActiveComponent) => commit('SET_CurrentActiveComponent',CurrentActiveComponent),
    //当前项目的id
    SET_ProjectId: ({ commit },ProjectId) => commit('SET_ProjectId',ProjectId),
	}
}

export default menu
