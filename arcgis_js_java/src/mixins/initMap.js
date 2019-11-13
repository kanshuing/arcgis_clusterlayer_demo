/**
 * 地图相关
 */
import { mapGetters } from "vuex";
var Map = {
  methods: {
    initMap(mapDiv) {
      //地图相关操作
      var map;
      /*
       * 初始化地图控件，并大致指定地图显示范围为山东省
       */
      map = new this.Map(mapDiv, {
        logo: false,
        slider: false,
        nav: false,
        showLabels: true, //非常重要；显示标注用
        extent: new this.Extent({
          xmin: 112.117,
          ymin: 21.665,
          xmax: 114.151,
          ymax: 33.681,
          spatialReference: {
            wkid: process.env.MAP_SPATIALREFERENCE
          }
        })
      });

      //地图加载后
      map.on("load", () => {
        // 隐藏弹出窗口的ZoomTo连接，对聚集没有实际意义
        // domStyle.set(query("a.action.zoomTo")[0], "display", "none");
        //获取点数据
        this.$store.dispatch("getPoints").then(res => {
          let { data: _array } = res;
          addClusters(_array);
        });
      });

      /*将map传递到state中，方便其他组件进行图层的操作*/
      this.$store.dispatch("SET_Map", map);
      /*
       * 加载山东省的天地图
       */
      let layer_anno = new this.TDTAnnoLayer(),
        layer_base = new this.TDTLyr();
      layer_anno.id = "layer_anno";
      layer_base.id = "layer_base";
      map.addLayer(layer_base, 0); //添加矢量图层

      map.addLayer(layer_anno, 0); //添加注记层
      /**
       * 加载点
       */
      /*        this.$store.dispatch("getPoints").then(res=>{
            let {data:_array} = res;
            var ssymbol = new this.PictureMarkerSymbol("http://lbs.tianditu.gov.cn/images/bus/start.png", 29, 30);
            _array = _array.slice(0,100);
            _array.forEach(({dgsBzgpsjd,dgsBzgpswd})=>{
                var stpoint = new this.Point(parseFloat(dgsBzgpsjd),parseFloat(dgsBzgpswd),new this.SpatialReference({wkid:4490}));
                map.graphics.add(new this.Graphic(stpoint, ssymbol));
            })
        }).catch(()=>{

        })*/

      /**
       * 聚集效果
       * @type {getters.GraphicsLayer|*}
       */

      //聚集图层
      var clusterLayer;

      //添加聚集
      var addClusters = resp => {
        var photoInfo = {}; // 存储点坐标信息
        //遍历生成需要数据并存入对象中，目的待定
        photoInfo.data = this.arrayUtils.map(resp, ({ dgsBzgpsjd: lng, dgsBzgpswd: lat }) => {
            return  {
                x:parseFloat(lng),
                y:parseFloat(lat)
            }
        });
        // 聚集图层
        clusterLayer = new this.ClusterLayer({
          data: photoInfo.data,
          distance: 100,
          id: "clusters",
          labelColor: "#fff",
          labelOffset: 10,
          resolution: map.extent.getWidth() / map.width,
          singleColor: "#888",
          spatialReference: new this.SpatialReference({
            wkid: 4490
          })
          // "singleTemplate": popupTemplate
        });
          clusterLayer.spatialReference = new this.SpatialReference({
              wkid: 4490
          })
        var defaultSym = new this.SimpleMarkerSymbol().setSize(4); //样式
        var renderer = new this.ClassBreaksRenderer(defaultSym, "clusterCount"); //渲染 clusterCount干啥的待定

        // var picBaseUrl = "localhost:9528/static/image"; //图片路径
        var picBaseUrl = "https://static.arcgis.com/images/Symbols/Shapes";; //图片路径
        //三种图片样式
        var blue = new this.PictureMarkerSymbol(`${picBaseUrl}/BluePin1LargeB.png`, 32, 32).setOffset(0, 15);
        var green = new this.PictureMarkerSymbol(`${picBaseUrl}/GreenPin1LargeB.png`, 64, 64).setOffset(0, 15);
        var red = new this.PictureMarkerSymbol(`${picBaseUrl}/RedPin1LargeB.png`, 72, 72).setOffset(0, 15);
        //设置断点，展示不同的样式
        renderer.addBreak(0, 2, blue);
        renderer.addBreak(2, 200, green);
        renderer.addBreak(200, 1001, red);

        //聚集图层设置渲染器
        clusterLayer.setRenderer(renderer);
        //将聚集图层加载到地图种
        map.addLayer(clusterLayer);

        //添加点击事件
        map.on("click", cleanUp);
        // 添加点击事件
        map.on("key-down", function(e) {
          if (e.keyCode === 27) {
            cleanUp();
          }
        });
      };

      function cleanUp() {
        map.infoWindow.hide();
        clusterLayer.clearSingles();
      }

      var graphicsLyrs = new this.GraphicsLayer({
        id: "graphicsLyrs"
      });
      map.addLayer(graphicsLyrs);
    }
  },
  computed: {
    ...mapGetters([
      "parser",
      "TDTLyr",
      "TDTAnnoLayer",
      "Extent",
      "Map",
      "Graphic",
      "GraphicsLayer",
      "Maps",
      "Point",
      "SimpleFillSymbol",
      "SimpleLineSymbol",
      "SpatialReference",
      "Color",
      "PictureMarkerSymbol",
      "ArcGISDynamicMapServiceLayer",
      "arrayUtils",
      "WebMercatorUtils",
      "ClusterLayer",
      "SimpleMarkerSymbol",
      "ClassBreaksRenderer"
    ])
  },
  destory() {
    this.Maps.removeAllLayers();
  }
};
export default Map;
