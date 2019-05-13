<template>
  <div class="app-header">
    <img src="../../assets/images/frame/menu.png" class="side-menu-btn" @click="controlMenu()">
    <div class="hd-align">JJU-BOOK</div>
  </div>
</template>

<script>
import { DOM } from "Constant/index";

import $ from 'jquery';

import "Style/header/header.css"

export default {
  name: 'app-header',
  computed: {},
  components: {
  },
  methods: {
    controlMenu() {
      // if (($(".side-wrap-block") != null && this.cntlSideBar)) {
      //   this.cntlSideBar = false
      // } else {
      //   this.cntlSideBar = !this.cntlSideBar
      // }
      this.$store.commit(DOM.SET_SIDEBAR, !this.$store.getters.$_dom_use_sidebar)
    }
  },
  data() {
    return {
      cntlSideBar: false
    }
  }
}
</script>

<style>
</style>