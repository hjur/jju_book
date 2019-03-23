<template>
  <div>
    {{msg}}
    <button @click="goMenu('ETC')">ETC</button>
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
  methods:{
    goMenu(menuName){
      if(menuName == 'ETC'){
        this.$router.push({
          name: 'etc'
        })
      }
    }
  }
}
// import "SharedStyles/popup/popup.css";
</script>

<style>
</style>