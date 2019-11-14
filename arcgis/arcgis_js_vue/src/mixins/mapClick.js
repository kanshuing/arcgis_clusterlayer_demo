import Store from "@/store";
import { Message } from "element-ui";

export default {
  methods: {
    /*********************点击地图显示弹窗****************************/
    //mapLyrs   加载的图层
    mapClick(map, mapLyrs) {
      //查询图层属性
      var identifyTasks = [];
      //查询参数配置
      var identifyParams = this.initIdentifyParams(map);
      //如果查询图层为空，则跳过
      identifyTasks.push(Store.getters.IdentifyTask(mapLyrs.url));
      map.onClick = false;
      //点击地图弹出窗
      var clickEvt = map.on("click", evt => {
        if (Store.getters.currentActionType == null) {
          identifyParams.geometry = evt.mapPoint;
          identifyParams.mapExtent = map.extent;
          //因为identifyTask是异步的，所以加了promise .then 控制运行顺序
          this.first(identifyTasks, identifyParams).then(response => {
            //如果有值则显示，否则提示未找到匹配信息
            if (response.length != 0) {
              let {
                feature: {
                  attributes: { ID: id }
                }
              } = response[0][0];
              this.show = true;
              this.id = "";
              this.belongid = id;
              this.edit = false;
            } else {
              return "false";
            }
          });
        }
      });
    },
    /**
     * 获取查询参数
     */
    initIdentifyParams(map) {
      //查询参数
      var identifyParams = new Store.getters.IdentifyParameters();
      identifyParams.tolerance = 3;
      //必须
      identifyParams.returnGeometry = true;
      identifyParams.layerIds = [0, 1, 2, 3, 4, 5];
      identifyParams.layerOption = Store.getters.IdentifyParameters.LAYER_OPTION_ALL;
      identifyParams.width = map.width;
      identifyParams.height = map.height;
      return identifyParams;
    },

    //获取查询的图层feature
    first(identifyTasks, identifyParams) {
      var tasksArrays = [];
      //将所有的需要进行查询的服务都加载进来，进行属性查询
      for (var _identifyTask of identifyTasks) {
        tasksArrays.push(
          new Promise(resolve => {
            _identifyTask.execute(identifyParams).addCallback(function(response) {
              resolve(response);
            });
          })
        );
      }
      //查询后统一进行处理，获取到最上侧的服务，并进入二阶段，
      return Promise.all(tasksArrays).then(tasks => {
        var tasksArray = [];
        for (var _task of tasks) {
          if (_task.length != 0) {
            tasksArray.push(_task);
          }
        }
        return tasksArray;
      });
    }
  }
};
