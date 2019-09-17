<template>
  <div>
    <whatJs></whatJs>
  </div>
</template>

<script>
import whatJs from "MarkDown/note/frontEnd/js/whatJs.md"
import { DOM } from "Constant/index";

export default {
  name: 'what-js',
  computed: {},
  components: {
    "whatJs": whatJs,
  },
  mounted() {
    this.$nextTick(() => {

    })
  },
  // data() {
  //   return {
  //     mdGrammar: grammar.source,
  //   }
  // },
  methods: {

  }
}
</script>

<style>
</style>