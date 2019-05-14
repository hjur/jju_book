<template>
  <div class="app-header app-theme-header">
    <img src="../../assets/images/frame/menu_white.png" class="side-menu-btn" @click="controlMenu()">
    <div class="hd-align" @click="goHome()">JJU-BOOK :-)</div>
    <hr class="division-line" style="margin-left:-10px">
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
    goHome() {
      this.$router.push({
        name: "mainPage"
      })
    },
    controlMenu() {
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