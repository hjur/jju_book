<template>
  <div>
    <span class="side-menu-btn" :style="menuStyle" @click="openMenu()">
      menu
    </span>
    <div class="page-overlay" :style="sideStyle" @click="closeMenu()">

    </div>
    <div class="side-menu-container animate" :style="sideStyle" style="z-index:5">
      <button class="menu-depth1" @click="closeMenu()">Close Menu</button>
      <hr class="division_line">
      <button class="menu-depth1" @click="goMenu('ETC')">ETC</button>
      <button class="menu-depth1" @click="open2depth('NOTE')">NOTE</button>
      <div v-show="show2depth == 'NOTE'">
        <button class="menu-depth2" @click="goMenu('md-grammar')">마크다운 작성법</button>
        <button class="menu-depth2" @click="goMenu('domestic-map')">지도</button>
      </div>
      <button class="menu-depth1">test</button>
    </div>
  </div>
</template>

<script>
import "Style/aside/aside.css"
export default {
  name: 'app-aside',
  mounted() {
  },
  methods: {
    goMenu(menuName) {
      this.$router.push({
        name: menuName
      })
    },
    openMenu() {
      this.sideStyle = {
        'display': 'block',
      }
      this.menuStyle = {
        'display': 'none',
      }

    },
    closeMenu() {
      this.sideStyle = {
        'display': 'none',
      }
      this.menuStyle = {
        'display': 'block',
      }
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
      menuStyle: {
        'display': 'block'
      },
    }
  }
}
</script>

<style>
</style>