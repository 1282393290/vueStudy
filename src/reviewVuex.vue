<template>
  <div>
    <h1>我爱--{{msg}}--{{name}}</h1>
    <button @click="fn">love</button>
  </div>
</template>
<script>
import { mapState,mapGetters,mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState('todo',['name'])//,
    // ...mapGetters(['first'])
  },
  methods: {
    // ...mapMutations(['born']),
    // ...mapActions(['reborn']),
    fn () {
      // this.msg = this.$store.state.name
      // this.$store.commit('born',"波多野结衣-孙婷")
      // this.born("波多野结衣-孙婷")
      // this.$store.dispatch('reborn')
      // this.reborn()
      this.$store.commit('todo/turn',"孙婷-李爱新")
    }
  }
}
</script>
