<template>
  <pre>
    <grammar/>
  </pre>
</template>

<script>
import { grammar } from "MarkDown/note/markdown/grammar.md"
export default {
  name: 'md-grammar',
  computed: {},
  components: {
    grammar
  },
  data() {
    return {
      mdGrammar: grammar.source,
    }
  },
  methods: {

  }
}
// import "SharedStyles/popup/popup.css";
</script>

<style>
</style>