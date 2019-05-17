<template>
  <div>
    <py01io></py01io>
    <py02Val></py02Val>
  </div>
</template>

<script>
import py01IO from "MarkDown/note/python/py01IO.md"
import py02Val from "MarkDown/note/python/py02Val.md"
import whatPython from "MarkDown/note/python/whatPython.md"

export default {
  name: 'py01-io',
  computed: {},
  components: {
    "py01io": py01IO,
    "py02Val": py02Val
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