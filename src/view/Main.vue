<template>
  <div>
    {{msg}}
    {{msg}}
    {{msg}}
    {{msg}}
    {{msg}}
    {{msg}}
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
      msg: 'jju book 본문',
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