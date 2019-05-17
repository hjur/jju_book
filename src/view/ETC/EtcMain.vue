<template>
  <section>
    <reference></reference>
  </section>
</template>

<script>
import reference from "MarkDown/etc/reference.md"

export default {
  name: 'etcMain',
  computed: {},
  components: {
    'reference': reference
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>