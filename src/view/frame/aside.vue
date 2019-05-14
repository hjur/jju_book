<template>
  <div :class="{'side-wrap-block':shwoSideBar ,'side-wrap-none':!shwoSideBar  }">
    <div class="page-overlay" v-show="shwoSideBar" @click="closeMenu()"> </div>
    <div class="side-menu-container animate" style="z-index:5">
      <button class="menu-depth1 menu-depth1-color" @click="goMenu('ETC')">ETC</button>
      <button class="menu-depth1 menu-depth1-color" @click="open2depth('NOTE')">NOTE</button>
      <div v-show="show2depth == 'NOTE'">
        <button class="menu-depth2 menu-depth2-color" @click="goMenu('md-grammar')">마크다운 작성법</button>
        <button class="menu-depth2 menu-depth2-color" @click="goMenu('domestic-map')">지도</button>
      </div>
      <button class="menu-depth1 menu-depth1-color" @click="open2depth('PYTHON')">PYTHON</button>
      <div v-show="show2depth == 'PYTHON'">
        <button class="menu-depth2 menu-depth2-color" @click="goMenu('what-py')">파이썬이란?</button>
      </div>
    </div>
  </div>
</template>

<script>
import { DOM } from "Constant/index";

import "Style/aside/aside.css"

export default {
  name: 'app-aside',
  computed: {
    shwoSideBar: function () {
      return this.$store.getters.$_dom_use_sidebar;
    }
  },
  methods: {
    goMenu(menuName) {
      this.$router.push({
        name: menuName
      })
    },
    closeMenu() {
      this.$store.commit(DOM.SET_SIDEBAR, false)
    },
    open2depth(openDepthNM) {

      if (this.show2depth == openDepthNM) {
        this.show2depth = ""
      } else {
        this.show2depth = openDepthNM
      }
    }
  },
  data() {
    return {
      show2depth: null,

      sideStyle: {
        'display': 'none'
      },
    }
  }
}
</script>

<style>
</style>