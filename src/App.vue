<template>
  <div id="app">
    <app-aside> </app-aside>
    <hr class="division_line">

    <app-header> </app-header>
    <hr class="division_line">

    <router-view ref="view" class="app-body">
    </router-view>
    <app-footer> </app-footer>
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
  data() {
    return {
      msg: 'Welcome to Your Vue.js App' // https://wtss.tistory.com
    }
  }
}
</script>

<style>
</style>
