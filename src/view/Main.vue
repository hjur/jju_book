<template>
  <div>
    {{msg}}
    <button @click="goMenu('ETC')">ETC</button>
    <button @click="goMenu('md-grammar')">마크다운 작성법</button>
    <button @click="goMenu('save-youtube')">유튜브 다운</button>
    <button @click="goMenu('domestic-map')">지도</button>
  </div>
</template>

<script>

export default {
  name: 'mainPage',
  computed: {},
  components: {
  },
  data() {
    return {
      msg: 'jju book 메인',
    }
  },
  methods: {
    goMenu(menuName) {
      this.$router.push({
        name: menuName
      })
    }
  }
}
// import "SharedStyles/popup/popup.css";
</script>

<style>
</style>