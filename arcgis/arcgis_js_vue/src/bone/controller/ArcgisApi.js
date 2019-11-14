import esriLoader from "esri-loader";
/**
 * 用于防止esri功能的重复定义，在页面初始化时，将用到的esri地图文件加载进来，以后调用时不用反复的通过esri进行调用，可以直接调用
 */
const arcgis = {
  state: {
    esri: {
      layers: {
        TDTLyr: null,
        TDTAnnoLayer: null,
        SDRasterLayer: null, //天地图矢量图层
        SDRSAnnoLayer: null, //天地图注记图层
        FeatureLayer: null,
        Echarts3Layer: null,
        LabelClass: null,
        GraphicsLayer: null,
        ArcGISDynamicMapServiceLayer: null,
        ArcGISTiledMapServiceLayer: null,
        TileInfo: null,
        WMTSLayerInfo: null,
        WMTSLayer: null
      },
      extras: {
        ClusterLayer: null
      },
      SpatialReference: null,
      map: null,
      InfoTemplate: null,
      geometry: {
        Extent: null,
        WebMercatorUtils: null,
        Point: null,
        Polyline: null,
        Polygon: null,
        Circle: null,
        geometryEngine: null,
        projection: null,
        geodesicUtils: null
      },
      symbols: {
        SimpleMarkerSymbol: null,
        SimpleLineSymbol: null,
        SimpleFillSymbol: null,
        TextSymbol: null,
        Font: null,
        PictureMarkerSymbol: null,
        MarkerSymbol: null
      },
      renderers: {
        UniqueValueRenderer: null,
        ClassBreaksRenderer: null
      },
      Color: null,
      lang: null,
      Graphic: null,
      tasks: {
        IdentifyTask: null,
        IdentifyParameters: null,
        Query: null,
        GeometryService: null,
        BufferParameters: null
      },
      toolbars: {
        draw: null,
        edit: null
      },
      dijit: {
        Measurement: null,
        LayerSwipe: null
      },
      units: null
    },
    dijit: {
      TooltipDialog: null,
      popup: null,
      Legend: null
    },
    dojo: {
      _base: {
        array: null,
        event: null
      },
      number: null,
      domStyle: null,
      parser: null,
      dom: null
    }
  },

  mutations: {
    SET_TDTLyr: (state, TDTLyr) => {
      state.esri.layers.TDTLyr = TDTLyr;
    },
    SET_TDTAnnoLayer: (state, TDTAnnoLayer) => {
      state.esri.layers.TDTAnnoLayer = TDTAnnoLayer;
    },
    SET_SDRasterLayer: (state, SDRasterLayer) => {
      state.esri.layers.SDRasterLayer = SDRasterLayer;
    },
    SET_SDRSAnnoLayer: (state, SDRSAnnoLayer) => {
      state.esri.layers.SDRSAnnoLayer = SDRSAnnoLayer;
    },
    SET_FeatureLayer: (state, FeatureLayer) => {
      state.esri.layers.FeatureLayer = FeatureLayer;
    },
    SET_Echarts3Layer: (state, Echarts3Layer) => {
      state.esri.layers.Echarts3Layer = Echarts3Layer;
    },
    SET_LabelClass: (state, LabelClass) => {
      state.esri.layers.LabelClass = LabelClass;
    },
    SET_GraphicsLayer: (state, GraphicsLayer) => {
      state.esri.layers.GraphicsLayer = GraphicsLayer;
    },
    SET_ArcGISDynamicMapServiceLayer: (state, ArcGISDynamicMapServiceLayer) => {
      state.esri.layers.ArcGISDynamicMapServiceLayer = ArcGISDynamicMapServiceLayer;
    },
    SET_ArcGISTiledMapServiceLayer: (state, ArcGISTiledMapServiceLayer) => {
      state.esri.layers.ArcGISTiledMapServiceLayer = ArcGISTiledMapServiceLayer;
    },
    SET_TileInfo: (state, TileInfo) => {
      state.esri.layers.TileInfo = TileInfo;
    },
    SET_WMTSLayerInfo: (state, WMTSLayerInfo) => {
      state.esri.layers.WMTSLayerInfo = WMTSLayerInfo;
    },
    SET_WMTSLayer: (state, WMTSLayer) => {
      state.esri.layers.WMTSLayer = WMTSLayer;
    },
    SET_SpatialReference: (state, SpatialReference) => {
      state.esri.SpatialReference = SpatialReference;
    },
    SET_Draw: (state, draw) => {
      state.esri.toolbars.draw = draw;
    },
    SET_Edit: (state, edit) => {
      state.esri.toolbars.edit = edit;
    },
    SET_map: (state, map) => {
      state.esri.map = map;
    },
    SET_InfoTemplate: (state, InfoTemplate) => {
      state.esri.InfoTemplate = InfoTemplate;
    },
    SET_SimpleMarkerSymbol: (state, SimpleMarkerSymbol) => {
      state.esri.symbols.SimpleMarkerSymbol = SimpleMarkerSymbol;
    },
    SET_Extent: (state, Extent) => {
      state.esri.geometry.Extent = Extent;
    },
    SET_WebMercatorUtils: (state, WebMercatorUtils) => {
      state.esri.geometry.WebMercatorUtils = WebMercatorUtils;
    },
    SET_Point: (state, Point) => {
      state.esri.geometry.Point = Point;
    },
    SET_Polyline: (state, Polyline) => {
      state.esri.geometry.Polyline = Polyline;
    },
    SET_Polygon: (state, Polygon) => {
      state.esri.geometry.Polygon = Polygon;
    },
    SET_Circle: (state, Circle) => {
      state.esri.geometry.Circle = Circle;
    },
    SET_geometryEngine: (state, geometryEngine) => {
      state.esri.geometry.geometryEngine = geometryEngine;
    },
    SET_geodesicUtils: (state, geodesicUtils) => {
      state.esri.geometry.geodesicUtils = geodesicUtils;
    },
    SET_projection: (state, projection) => {
      state.esri.geometry.projection = projection;
    },
    SET_SimpleLineSymbol: (state, SimpleLineSymbol) => {
      state.esri.symbols.SimpleLineSymbol = SimpleLineSymbol;
    },
    SET_MarkerSymbol: (state, MarkerSymbol) => {
      state.esri.symbols.MarkerSymbol = MarkerSymbol;
    },
    SET_SimpleFillSymbol: (state, SimpleFillSymbol) => {
      state.esri.symbols.SimpleFillSymbol = SimpleFillSymbol;
    },
    SET_TextSymbol: (state, TextSymbol) => {
      state.esri.symbols.TextSymbol = TextSymbol;
    },
    SET_Font: (state, Font) => {
      state.esri.symbols.Font = Font;
    },
    SET_PictureMarkerSymbol: (state, PictureMarkerSymbol) => {
      state.esri.symbols.PictureMarkerSymbol = PictureMarkerSymbol;
    },
    SET_ClusterLayer: (state, ClusterLayer) => {
      state.esri.extras.ClusterLayer = ClusterLayer;
    },
    SET_ClassBreaksRenderer: (state, ClassBreaksRenderer) => {
      state.esri.renderers.ClassBreaksRenderer = ClassBreaksRenderer;
    },
    SET_UniqueValueRenderer: (state, UniqueValueRenderer) => {
      state.esri.renderers.UniqueValueRenderer = UniqueValueRenderer;
    },
    SET_Color: (state, Color) => {
      state.esri.Color = Color;
    },
    SET_lang: (state, lang) => {
      state.esri.lang = lang;
    },
    SET_graphic: (state, graphic) => {
      state.esri.graphic = graphic;
    },
    SET_IdentifyParameters: (state, IdentifyParameters) => {
      state.esri.tasks.IdentifyParameters = IdentifyParameters;
    },
    SET_IdentifyTask: (state, IdentifyTask) => {
      state.esri.tasks.IdentifyTask = IdentifyTask;
    },
    SET_Query: (state, Query) => {
      state.esri.tasks.Query = Query;
    },
    SET_GeometryService: (state, GeometryService) => {
      state.esri.tasks.GeometryService = GeometryService;
    },
    SET_BufferParameters: (state, BufferParameters) => {
      state.esri.tasks.BufferParameters = BufferParameters;
    },
    SET_TooltipDialog: (state, TooltipDialog) => {
      state.dijit.TooltipDialog = TooltipDialog;
    },
    SET_popup: (state, popup) => {
      state.dijit.popup = popup;
    },
    SET_Legend: (state, Legend) => {
      state.dijit.Legend = Legend;
    },
    SET_array: (state, array) => {
      state.dojo._base.array = array;
    },
    SET_event: (state, event) => {
      state.dojo._base.event = event;
    },
    SET_number: (state, number) => {
      state.dojo.number = number;
    },
    SET_domStyle: (state, domStyle) => {
      state.dojo.domStyle = domStyle;
    },
    SET_parser: (state, parser) => {
      state.dojo.parser = parser;
    },
    SET_dom: (state, dom) => {
      state.dojo.dom = dom;
    },
    SET_Measurement: (state, Measurement) => {
      state.esri.dijit.Measurement = Measurement;
    },
    SET_LayerSwipe: (state, LayerSwipe) => {
      state.esri.dijit.LayerSwipe = LayerSwipe;
    },
    SET_units: (state, units) => {
      state.esri.units = units;
    }
  },
  actions: {
    /**
     * 将esri的API进行定义，并放入state中，后续用到的地方引用一下getters即可
     */
    Init_Api({ commit }) {
        //引用聚合包--配置arcgis拓展解析天地图服务类引用的路径
        var dojoConfig = {
            paths: {
                extras: location.pathname.replace(/\/[^/]+$/, "") + "/extras"
            }
        };

      return new Promise(resolve => {
        esriLoader.loadScript({
          url: `${process.env.ARCGIS_API_URL}/library/3.24/3.24/init.js`
        });
        esriLoader.loadCss(`${process.env.ARCGIS_API_URL}/library/3.24/3.24/dijit/themes/claro/claro.css`); //测距测面工具引入样式
        esriLoader.loadCss(`${process.env.ARCGIS_API_URL}/library/3.24/3.24/esri/css/esri.css`);
        esriLoader.loadCss(`${process.env.ARCGIS_API_URL}/library/3.24/3.24/esri/themes/calcite/dijit/calcite.css`); //拉帘工具引入样式
        esriLoader.loadCss(`${process.env.ARCGIS_API_URL}/library/3.24/3.24/esri/themes/calcite/esri/esri.css`);
        esriLoader
          .loadModules([
            "esri/layers/TDTLyr",
            "esri/layers/TDTAnnoLayer",
            "esri/layers/SDRasterLayer",
            "esri/layers/SDRSAnnoLayer",
            "esri/map",
            "esri/InfoTemplate",
            "esri/layers/ArcGISDynamicMapServiceLayer",
            "esri/layers/ArcGISTiledMapServiceLayer",
            "esri/layers/FeatureLayer",
            "esri/layers/Echarts3Layer",
            "esri/layers/TileInfo",
            "esri/layers/WMTSLayerInfo",
            "esri/layers/WMTSLayer",
            "esri/geometry/Extent",
            "esri/geometry/webMercatorUtils",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/symbols/SimpleLineSymbol",
            "esri/symbols/SimpleFillSymbol",
            "esri/symbols/MarkerSymbol",
            "extras/ClusterLayer",
            "esri/renderers/ClassBreaksRenderer",
            "esri/renderers/UniqueValueRenderer",
            "esri/Color",
            "dijit/TooltipDialog",
            "dijit/popup",
            "esri/dijit/Legend",
            "esri/lang",
            "esri/symbols/TextSymbol",
            "esri/symbols/Font",
            "esri/layers/LabelClass",
            "esri/layers/GraphicsLayer",
            "esri/geometry/Point",
            "esri/geometry/Polyline",
            "esri/geometry/Polygon",
            "esri/geometry/Circle",
            "esri/geometry/geometryEngine",
            "esri/geometry/geodesicUtils",
            "esri/geometry/projection",
            "esri/symbols/PictureMarkerSymbol",
            "esri/tasks/IdentifyTask",
            "esri/tasks/IdentifyParameters",
            "esri/tasks/query",
            "esri/tasks/GeometryService",
            "esri/tasks/BufferParameters",
            "esri/graphic",
            "esri/SpatialReference",
            "esri/toolbars/draw",
            "esri/toolbars/edit",
            "esri/dijit/Measurement",
            "esri/dijit/LayerSwipe",
            "esri/units",
            "dojo/_base/array",
            "dojo/_base/event",
            "dojo/number",
            "dojo/dom-style",
            "dojo/parser",
            "dojo/dom",
            "dojo/domReady!"
          ])
          .then(
            ([
              TianDiTuLayer,
              TDTAnnoLayer,
              SDRasterLayer,
              SDRSAnnoLayer,
              Map,
              InfoTemplate,
              ArcGISDynamicMapServiceLayer,
              ArcGISTiledMapServiceLayer,
              FeatureLayer,
              Echarts3Layer,
              TileInfo,
              WMTSLayerInfo,
              WMTSLayer,
              Extent,
              webMercatorUtils,
              SimpleMarkerSymbol,
              SimpleLineSymbol,
              SimpleFillSymbol,
              MarkerSymbol,
              ClusterLayer,
              ClassBreaksRenderer,
              UniqueValueRenderer,
              Color,
              TooltipDialog,
              dijitPopup,
              Legend,
              esriLang,
              TextSymbol,
              Font,
              LabelClass,
              GraphicsLayer,
              Point,
              Polyline,
              Polygon,
              Circle,
              geometryEngine,
              geodesicUtils,
              projection,
              PictureMarkerSymbol,
              IdentifyTask,
              IdentifyParameters,
              Query,
              GeometryService,
              BufferParameters,
              Graphic,
              SpatialReference,
              Draw,
              Edit,
              Measurement,
              LayerSwipe,
              units,
              arrayUtils,
              event,
              number,
              domStyle,
              parser,
              dom
            ]) => {
              /**
               * 将方法存储到store的state中，避免以后再次调用
               */
              commit("SET_TDTLyr", TianDiTuLayer);
              commit("SET_TDTAnnoLayer", TDTAnnoLayer);
              commit("SET_SDRasterLayer", SDRasterLayer);
              commit("SET_SDRSAnnoLayer", SDRSAnnoLayer);
              commit("SET_map", Map);
              commit("SET_InfoTemplate", InfoTemplate);
              commit("SET_ArcGISDynamicMapServiceLayer", ArcGISDynamicMapServiceLayer);
              commit("SET_ArcGISTiledMapServiceLayer", ArcGISTiledMapServiceLayer);
              commit("SET_FeatureLayer", FeatureLayer);
              commit("SET_Echarts3Layer", Echarts3Layer);
              commit("SET_TileInfo", TileInfo);
              commit("SET_WMTSLayerInfo", WMTSLayerInfo);
              commit("SET_WMTSLayer", WMTSLayer);
              commit("SET_SimpleMarkerSymbol", FeatureLayer);
              commit("SET_Extent", Extent);
              commit("SET_WebMercatorUtils", webMercatorUtils);

              commit("SET_SimpleLineSymbol", SimpleLineSymbol);
              commit("SET_SimpleFillSymbol", SimpleFillSymbol);
              commit("SET_UniqueValueRenderer", UniqueValueRenderer);
              commit("SET_Color", Color);
              commit("SET_TooltipDialog", TooltipDialog);
              commit("SET_popup", dijitPopup);
              commit("SET_Legend", Legend);
              commit("SET_lang", esriLang);
              commit("SET_TextSymbol", TextSymbol);
              commit("SET_Font", Font);
              commit("SET_LabelClass", LabelClass);
              commit("SET_GraphicsLayer", GraphicsLayer);
              commit("SET_Point", Point);
              commit("SET_Polyline", Polyline);
              commit("SET_Polygon", Polygon);
              commit("SET_Circle", Circle);
              commit("SET_geometryEngine", geometryEngine);
              commit("SET_geodesicUtils", geodesicUtils);
              commit("SET_projection", projection);
              commit("SET_PictureMarkerSymbol", PictureMarkerSymbol);
              commit("SET_SimpleMarkerSymbol", SimpleMarkerSymbol);
              commit("SET_MarkerSymbol", MarkerSymbol);
              commit("SET_ClusterLayer", ClusterLayer);
              commit("SET_ClassBreaksRenderer", ClassBreaksRenderer);
              commit("SET_IdentifyTask", IdentifyTask);
              commit("SET_IdentifyParameters", IdentifyParameters);
              commit("SET_Query", Query);
              commit("SET_GeometryService", GeometryService);
              commit("SET_BufferParameters", BufferParameters);
              commit("SET_graphic", Graphic);
              commit("SET_array", arrayUtils);
              commit("SET_event", event);
              commit("SET_number", number);
              commit("SET_domStyle", domStyle);
              commit("SET_parser", parser);
              commit("SET_dom", dom);
              commit("SET_SpatialReference", SpatialReference);
              commit("SET_Draw", Draw);
              commit("SET_Edit", Edit);
              commit("SET_Measurement", Measurement);
              commit("SET_LayerSwipe", LayerSwipe);
              commit("SET_units", units);
              resolve();
            }
          );
      });
    }
  }
};

export default arcgis;
