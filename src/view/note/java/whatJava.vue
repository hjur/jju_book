<template>
  <div>
    <whatJava></whatJava>
    <exJava></exJava>
    <javaLang></javaLang>
  </div>
</template>

<script>
import whatJava from "MarkDown/note/java/whatJava.md"
import exJava from "MarkDown/note/java/exception.md"
import javaLang from "MarkDown/note/java/javaLang.md"
import { DOM } from "Constant/index";

export default {
  name: 'what-java',
  computed: {},
  components: {
    "whatJava": whatJava,
    "exJava": exJava,
    "javaLang": javaLang,
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