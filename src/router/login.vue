<template>
  <div>
    <p>name: <input type="text"></p>
    <p><router-link
        :to="{
          name:'header',
          params: {
            name: '刘慧玲',
            id: 2
          }
        }" 
        tag="button" 
       >爱上{{$route.params.name}}</router-link></p>
  </div>
</template>
<script>
export default {
  methods: {
    love () {
      setTimeout(()=>{
        this.$router.push('/header')
      },2000)
    }
  }
}
</script>

