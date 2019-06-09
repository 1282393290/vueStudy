<template>
  <h1>我是爱情--{{$route.params.id}}</h1>
</template>
<script>
export default {
  mounted () {
    console.log(this.$route)
    console.log(this.$router)
  }
}
</script>
