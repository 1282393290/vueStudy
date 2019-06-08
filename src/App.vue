<template>
  <div id="app">
    <!-- <router-view/> -->
    <Todo />
  </div>
</template>

<script>
import Todo from './router/Todo'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Todo
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-link-active{
  background: red;
}
</style>
