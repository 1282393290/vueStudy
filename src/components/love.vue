<template>
  <h1>sb--{{name}}--{{first}}<button @click="nameChn">修改</button>
  </h1>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['name']),
    first () {
      return name.split('-')[0]
    }
  },
  methods: {
    nameChn () {
      this.$store.commit('cn', '我稀罕你-慧玲')
    }
  }
}
</script>
