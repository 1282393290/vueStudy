<template>
  <div>
    <h1>我爱--{{msg}}--{{name}}--{{first}}</h1>
    <button @click="fn">love</button>
  </div>
</template>
<script>
import { mapState,mapGetters,mapMutations } from 'vuex'
export default {
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState(['name']),
    ...mapGetters(['first'])
  },
  methods: {
    ...mapMutations(['born']),
    fn () {
      // this.msg = this.$store.state.name
      // this.$store.commit('born',"波多野结衣-孙婷")
      this.born("波多野结衣-孙婷")
    }
  }
}
</script>
