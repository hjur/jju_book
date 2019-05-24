<template>
  <div>
    <whatPy></whatPy>
    <py01io></py01io>
    <py02Val></py02Val>
    <py03fn></py03fn>
  </div>
</template>

<script>
import whatPython from "MarkDown/note/python/whatPython.md"
import { DOM } from "Constant/index";

import py01IO from "MarkDown/note/python/py01IO.md"
import py02Val from "MarkDown/note/python/py02Val.md"
import py03fn from "MarkDown/note/python/py03fn.md"

export default {
  name: 'what-py',
  computed: {},
  components: {
    "whatPy": whatPython,
    "py01io": py01IO,
    "py02Val": py02Val,
    "py03fn": py03fn
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