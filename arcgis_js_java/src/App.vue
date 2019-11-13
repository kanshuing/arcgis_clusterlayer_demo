<template>
  <div id="app" style="overflow: hidden;height: 100%;">
    <!--路由的出口-->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      access: false
    };
  },
  mounted() {
    document.getElementById("app").oncontextmenu = function(e) {
      e.preventDefault();
    };
  },
  watch: {
    $route(to, from) {
      if (to.fullPath == "/login") {
        this.access = false;
      } else {
        this.access = true;
      }
    }
  }
};
</script>

<style></style>
