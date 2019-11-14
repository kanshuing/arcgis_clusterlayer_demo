<template>
  <!--地图-->
  <div id="mapCom">
    <div id="mapDiv" />
  </div>
</template>

<script>
import initMap from "@/mixins/initMap";
export default {
  mixins: [initMap],
  data() {
    return {};
  },
  mounted: function() {
    this.initMap("mapDiv");
  },
  components: {}
};
</script>

<style lang="scss">
#mapCom {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
  //地图
  #mapDiv {
    height: 100%;
    position: relative;
  }
}
</style>
