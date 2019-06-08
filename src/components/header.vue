<template>
  <div>
    <slot name="header" :head="msg"></slot>
    <p><router-link :to="{ path: '/one' }" tag="button">沈萌</router-link><router-link :to="{ path: '/two' }" tag="button">刘慧玲</router-link></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是头部'
    }
  }
}
</script>


