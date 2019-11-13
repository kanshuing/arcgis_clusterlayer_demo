/**
 * 拉帘相关
 */
import { mapGetters } from "vuex";

var Map = {
  data() {
    return {
      layers: [], //拉帘使用的图层  0：下层  1：上层
      swipeWidgeInstance: null //拉帘变量
    };
  },
  methods: {
    swipe() {
      //销毁拉帘功能
      this.swipeWidgeInstance && this.swipeWidgeInstance.destroy();

      //判断是否需要拉帘，如果需要则显示，否则直接跳过
      if (!(this.show.horizontal || this.show.vertical)) {
        return;
      }
      /**
       * 判断是否需要添加div
       * @type {HTMLElement}
       */
      let element = document.getElementById("swipeDiv");
      if (!element) {
        let childNode = document.createElement("div");
        childNode.setAttribute("id", "swipeDiv");
        let parent = document.getElementById("mapDiv");
        if (parent.children && parent.children.length > 0) {
          parent.insertBefore(childNode, parent.childNodes[0]);
        } else {
          parent.appendChild(childNode);
        }
      }

      /**
       * 获取拉帘图层
       * @type {getters.Maps|Array|t.a.props.Maps|{type}}
       */
      var map = this.Maps;
      this.loadDynic();
      var swipe_layer = null;
      //获取到被拉帘的图层信息
      try {
        map.layerIds.forEach(item => {
          if (item.includes("WL")) {
            swipe_layer = map.getLayer(item);
            throw swipe_layer;
          }
        });
      } catch (e) {
        console.log("拉帘图层", e);
      }

      /**
       * 开始实现拉帘效果
       */
      //如果先前没有创建过拉帘或者被销毁，则创建
      let type = this.show.horizontal ? "horizontal" : "vertical";
      this.swipeWidgeInstance = new this.LayerSwipe(
        {
          type: type, //Try switching to "scope" or "horizontal"
          map: map,
          layers: [swipe_layer]
        },
        "swipeDiv"
      );
      this.swipeWidgeInstance.startup();
    },
    //加载动态图层
    loadDynic() {
      //清理没必要的图层
      this.Maps.layerIds.forEach(item => {
        if (item.includes("WL")) {
          this.Maps.removeLayer(this.Maps.getLayer(item));
        }
      });
      //过滤获取到指定的图层信息
      let _array = this.layers.filter(({ id }) => id == this.layer_check);
      let { id, layers } = _array[0];

      var options = {
        id: `WL${id}`
      };
      let _layers = new this.ArcGISDynamicMapServiceLayer(layers, options);
      this.Maps.addLayer(_layers);
    },
    //加载wtms
    loadWtms() {
      //清理没必要的图层
      this.Maps.layerIds.forEach(item => {
        if (item.includes("WL")) {
          this.Maps.removeLayer(this.Maps.getLayer(item));
        }
      });
      //过滤获取到指定的图层信息
      let _array = this.layers.filter(({ id }) => id == this.layer_check);
      let { id, url, layer_name } = _array[0];
      var tileInfo = new this.TileInfo({
        rows: 256,
        cols: 256,
        format: "image/png",
        dpi: 96,
        compressionQuality: 0,
        origin: {
          x: -180,
          y: 90
        },
        spatialReference: {
          wkid: 4490
        },
        lods: [
          { level: `EPSG:4326_${layer_name}:0`, resolution: 1.4062500000002376, scale: 590995186.11759996 },
          { level: `EPSG:4326_${layer_name}:1`, resolution: 0.703125000000119, scale: 295497593.0588 },
          { level: `EPSG:4326_${layer_name}:2`, resolution: 0.351562500000059, scale: 147748796.5294 },
          { level: `EPSG:4326_${layer_name}:3`, resolution: 0.17578125000003, scale: 73874398.2647 },
          { level: `EPSG:4326_${layer_name}:4`, resolution: 0.0878906250000148, scale: 36937199.1323 },
          { level: `EPSG:4326_${layer_name}:5`, resolution: 0.0439453125000074, scale: 18468599.566175 },
          { level: `EPSG:4326_${layer_name}:6`, resolution: 0.0219726562500037, scale: 9234299.7830875 },
          { level: `EPSG:4326_${layer_name}:7`, resolution: 0.0109863281250019, scale: 4617149.89154375 },
          { level: `EPSG:4326_${layer_name}:8`, resolution: 0.00549316406250093, scale: 2308574.94577187 },
          { level: `EPSG:4326_${layer_name}:9`, resolution: 0.00274658203125046, scale: 1154287.47288594 },
          { level: `EPSG:4326_${layer_name}:10`, resolution: 0.00137329101562523, scale: 577143.736442969 },
          { level: `EPSG:4326_${layer_name}:11`, resolution: 0.000686645507812616, scale: 288571.868221484 },
          { level: `EPSG:4326_${layer_name}:12`, resolution: 0.000343322753906308, scale: 144285.934110742 },
          { level: `EPSG:4326_${layer_name}:13`, resolution: 0.000171661376953154, scale: 72223.960000000006 },
          { level: `EPSG:4326_${layer_name}:14`, resolution: 8.5830688476577e-5, scale: 36071.4835276855 },
          { level: `EPSG:4326_${layer_name}:15`, resolution: 4.29153442382885e-5, scale: 18035.7417638428 },
          { level: `EPSG:4326_${layer_name}:16`, resolution: 2.14576721191443e-5, scale: 9017.87088192139 },
          { level: `EPSG:4326_${layer_name}:17`, resolution: 1.07288360595721e-5, scale: 4508.93544096069 },
          { level: `EPSG:4326_${layer_name}:18`, resolution: 5.36441802978606e-6, scale: 2254.46772048035 },
          { level: `EPSG:4326_${layer_name}:19`, resolution: 2.68220901489303e-6, scale: 1127.23386024017 },
          { level: `EPSG:4326_${layer_name}:20`, resolution: 1.34110450744652e-6, scale: 563.616930120087 }
        ]
      });
      var tileExtent = new this.Extent(
        -180,
        -90,
        180,
        90,
        new this.SpatialReference({
          wkid: 4490
        })
      );

      var layerInfo = new this.WMTSLayerInfo({
        tileInfo: tileInfo,
        fullExtent: tileExtent,
        initialExtent: tileExtent,
        identifier: `${layer_name}`,
        tileMatrixSet: `EPSG:4326_${layer_name}`,
        format: "png",
        style: "_null"
      });

      var resourceInfo = {
        version: "1.0.0",
        layerInfos: [layerInfo]
        //copyright: "open layer"
      };

      var options = {
        serviceMode: "KVP",
        resourceInfo: resourceInfo,
        layerInfo: layerInfo,
        id: `WL${id}`
      };
      let layers = new this.WMTSLayer(url, options);
      this.Maps.addLayer(layers);
    }
  },
  computed: {
    ...mapGetters(["SDRasterLayer", "TileInfo", "WMTSLayerInfo", "WMTSLayer", "SpatialReference", "Extent", "Maps", "LayerSwipe", "ArcGISDynamicMapServiceLayer"])
  }
};
export default Map;
