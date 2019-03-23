<template>
  <div id="app">
    app.vue
    <router-view ref="view">
    </router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
