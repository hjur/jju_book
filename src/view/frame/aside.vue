<template>
  <div class="app-aside menu-container">

    <button class="menu-depth1" @click="goMenu('ETC')">ETC</button>
    <button class="menu-depth1" @click="goMenu('md-grammar')">마크다운 작성법</button>
    <button class="menu-depth1" @click="goMenu('domestic-map')">지도</button>
  </div>
</template>

<script>
import "Style/aside/aside.css"
export default {
  name: 'app-aside',
  computed: {},
  components: {
  },
  methods: {
    goMenu(menuName) {
      this.$router.push({
        name: menuName
      })
    }
  }
}
</script>

<style>
</style>