<template>
  <div>
    <grammar />
  </div>
</template>

<script>
import grammar from "MarkDown/note/markdown/grammar.md"
export default {
  name: 'md-grammar',
  computed: {},
  components: {
    'grammar': grammar
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