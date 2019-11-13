//state的获取
const getters = {
  /*****************************地图相关信息*******************************/
  //获取esri的相关功能
  TDTLyr: state => state.arcgis.esri.layers.TDTLyr,
  TDTAnnoLayer: state => state.arcgis.esri.layers.TDTAnnoLayer,
  SDRasterLayer: state => state.arcgis.esri.layers.SDRasterLayer,
  SDRSAnnoLayer: state => state.arcgis.esri.layers.SDRSAnnoLayer,
  FeatureLayer: state => state.arcgis.esri.layers.FeatureLayer,
  SpatialReference: state => state.arcgis.esri.SpatialReference,
  LabelClass: state => state.arcgis.esri.layers.LabelClass,
  GraphicsLayer: state => state.arcgis.esri.layers.GraphicsLayer,
  Echarts3Layer: state => state.arcgis.esri.layers.Echarts3Layer,
  ArcGISDynamicMapServiceLayer: state => state.arcgis.esri.layers.ArcGISDynamicMapServiceLayer,
  ArcGISTiledMapServiceLayer: state => state.arcgis.esri.layers.ArcGISTiledMapServiceLayer,
  TileInfo: state => state.arcgis.esri.layers.TileInfo,
  WMTSLayerInfo: state => state.arcgis.esri.layers.WMTSLayerInfo,
  WMTSLayer: state => state.arcgis.esri.layers.WMTSLayer,
  Draw: state => state.arcgis.esri.toolbars.draw,
  Edit: state => state.arcgis.esri.toolbars.edit,
  SimpleMarkerSymbol: state => state.arcgis.esri.symbols.SimpleMarkerSymbol,
  Map: state => state.arcgis.esri.map,
  InfoTemplate: state => state.arcgis.esri.InfoTemplate,
  Extent: state => state.arcgis.esri.geometry.Extent,
  WebMercatorUtils: state => state.arcgis.esri.geometry.WebMercatorUtils,
  Point: state => state.arcgis.esri.geometry.Point,
  Polyline: state => state.arcgis.esri.geometry.Polyline,
  Polygon: state => state.arcgis.esri.geometry.Polygon,
  Circle: state => state.arcgis.esri.geometry.Circle,
  geometryEngine: state => state.arcgis.esri.geometry.geometryEngine,
  geodesicUtils: state => state.arcgis.esri.geometry.geodesicUtils,
  SimpleLineSymbol: state => state.arcgis.esri.symbols.SimpleLineSymbol,
  SimpleFillSymbol: state => state.arcgis.esri.symbols.SimpleFillSymbol,
  TextSymbol: state => state.arcgis.esri.symbols.TextSymbol,
  Font: state => state.arcgis.esri.symbols.Font,
  PictureMarkerSymbol: state => state.arcgis.esri.symbols.PictureMarkerSymbol,
  MarkerSymbol: state => state.arcgis.esri.symbols.MarkerSymbol,
  ClusterLayer: state => state.arcgis.esri.extras.ClusterLayer,
  UniqueValueRenderer: state => state.arcgis.esri.renderers.UniqueValueRenderer,
  ClassBreaksRenderer: state => state.arcgis.esri.renderers.ClassBreaksRenderer,
  Color: state => state.arcgis.esri.Color,
  lang: state => state.arcgis.esri.lang,
  Graphic: state => state.arcgis.esri.graphic,
  IdentifyTask: state => state.arcgis.esri.tasks.IdentifyTask,
  IdentifyParameters: state => state.arcgis.esri.tasks.IdentifyParameters,
  Query: state => state.arcgis.esri.tasks.Query,
  GeometryService: state => state.arcgis.esri.tasks.GeometryService,
  BufferParameters: state => state.arcgis.esri.tasks.BufferParameters,
  units: state => state.arcgis.esri.units,
  Measurement: state => state.arcgis.esri.dijit.Measurement,
  LayerSwipe: state => state.arcgis.esri.dijit.LayerSwipe,
  //dijit
  TooltipDialog: state => state.arcgis.dijit.TooltipDialog,
  popup: state => state.arcgis.dijit.popup,
  Legend: state => state.arcgis.dijit.Legend,
  //获取dojo的相关功能
  number: state => state.arcgis.dojo.number,
  domStyle: state => state.arcgis.dojo.domStyle,
  arrayUtils: state => state.arcgis.dojo._base.array,
  Event: state => state.arcgis.dojo._base.event,
  parser: state => state.arcgis.dojo.parser,
  dom: state => state.arcgis.dojo.dom,

  /***************************当前地图的信息***********************************/
  //整个Map
  Maps: state => state.MapState.currentMapInfo.Map,
  //后续添加的图层
  mapLyrs: state => state.MapState.currentMapInfo.mapLyrs,
  //根据服务渲染的featurelayer
  toolBarLayers: state => state.MapState.currentMapInfo.toolBarLayers,
  //当前地图选择的状态--影像图还是地图
  PictureLayer: state => state.MapState.currentMapInfo.pictureLayer,
  //绘制的polygon
  searchPolygon: state => state.MapState.currentMapInfo.searchPolygon,
  //当前工具条选择类型
  currentActionType: state => state.MapState.currentMapInfo.currentActionType
};
export default getters;
