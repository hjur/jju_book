<template>
  <div id="app">
    <app-aside> </app-aside>
    <app-header> </app-header>
    <hr class="division-line">
    <div class="app-body app-theme-content">
      <router-view ref="view" class="content-wrap"> </router-view>
    </div>
    <!-- <app-footer> </app-footer> -->
  </div>
</template>

<script>
import appHeader from "View/frame/header.vue"
import appAside from "View/frame/aside.vue"
import appFooter from "View/frame/footer.vue"
import "Style/default.css"

export default {
  name: 'app',
  components: {
    'app-header': appHeader,
    'app-aside': appAside,
    'app-footer': appFooter
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
