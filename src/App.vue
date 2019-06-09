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
    <div>
      <h1>detail</h1>
      <ul>
        <li v-for="(item, index) in list" :key="index"><router-link :to="`/detail/${index}`">{{item.name}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  data () {
    return {
      msg: '',
      list: [
        { name: '沈萌' },
        { name: '波多野结衣' },
        { name: '吉泽明步' }
      ]
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
