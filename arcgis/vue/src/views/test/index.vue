<template>
  <div style="height: 100%;width: 100%;">
    <layout_map />
  </div>
</template>
<script>
import layout_map from "@/components/layoutMap/map";
export default {
  data() {
    return {};
  },
  components: {
    layout_map
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
#ldjsc {
  background: #e8f2fe;
  width: 100%;
  height: 100%;
  padding: 10px;
  .l-font {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    font-size: 13px;
    white-space: nowrap;
  }
}
</style>
