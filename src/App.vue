<template>
  <div id="app" class="white">
    <app-aside> </app-aside>
    <app-header> </app-header>
    <hr class="division-line" style="margin-top:85px;position:fixed;">
    <div class="app-body app-theme-content">
      <router-view ref="view" class="content-wrap"> </router-view>
    </div>
  </div>
</template>

<script>
import appHeader from "View/frame/header.vue"
import appAside from "View/frame/aside.vue"
import "Style/default.css"
import "Style/markdown.css"
import "Style/theme.css"
import "Style/content/content.css"

export default {
  name: 'app',
  components: {
    'app-header': appHeader,
    'app-aside': appAside,
  },
  computed: {
    shwoSideBar: function () {
      return this.$store.getters.$_dom_use_sidebar;
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App' // https://wtss.tistory.com
    }
  }
}
</script>

<style>
</style>
