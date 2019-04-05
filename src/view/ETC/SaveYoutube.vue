<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'save-youtube',
  computed: {},
  components: {
  },
  data() {
    return {
      msg: 'save-youtube',
    }
  },
  mounted() {
    this.getUrl()
  },
  methods: {
    getUrl() {
      let _this = this
      axios.get("https://youtu.be/cuhbuxmNRpY")
        .then(ret => {
          _this.msg = `ret : ${ret}`
          console.log("ret", ret)
        })
        .catch(e => {
          _this.msg = `error : ${e}`
          console.log("error", e)
        })
    }
  }
}
// import "SharedStyles/popup/popup.css";
</script>

<style>
</style>