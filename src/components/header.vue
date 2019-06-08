<template>
  <div>
    <slot name="header" :head="msg"></slot>
    <p><router-link :to="{ path: '/one' }" tag="button">沈萌</router-link><router-link :to="{ path: '/two' }" tag="button">刘慧玲</router-link></p>
    <p>{{id}}---{{name}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是头部'
    }
  },
  props: ['id','name']
}
</script>


