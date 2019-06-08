<template>
  <div id="app">
    <Header>
      <template v-slot:header="{head}">
        <h1>{{head}}</h1>
      </template>
    </Header>
    <router-view/>
    <Footer>
      <template v-slot:footer="{foot}">
        <h1>{{foot}}</h1>
      </template>
    </Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Header,
    Footer
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
