<template>
  <div>
    <whatJava></whatJava>
  </div>
</template>

<script>
import whatJava from "MarkDown/note/java/whatJava.md"
import { DOM } from "Constant/index";

export default {
  name: 'what-java',
  computed: {},
  components: {
    "whatJava": whatJava,
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