<template>
  <div class="svg-icon">
    <el-tooltip v-if="tooltip" :content="content" :placement="placement">
      <svg :class="svgClass" aria-hidden="true" @click="$emit('click')">
        <use :xlink:href="iconName"></use>
      </svg>
    </el-tooltip>

    <svg v-else :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    tooltip: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      defaullt: ""
    },
    placement: {
      type: String,
      default: "top"
    },
    //svg相关配置
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    auto: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      let pre = this.auto ? "auto " : "limit ";
      if (this.className) {
        return pre + this.className;
      } else {
        return pre;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin main {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-icon{
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 100%;

  .limit {
    width: 14px;
    height: 14px;
    @include main;
  }
  .auto {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    @include main;
  }
  .auto::before {
    content: "";
    padding-top: 100%;
    display: block;
  }
}

</style>
