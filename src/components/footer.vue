<template>
  <div>
    <slot name="footer" :foot="msg"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是尾部'
    }
  }
}
</script>
