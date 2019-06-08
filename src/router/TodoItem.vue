<template>
  <div><li v-for="(one,index) in $attrs.ones" :key="one.id">{{one.name}}---{{index}}------{{one.id}} <button @click="del(index,one.id)">删除</button></li></div>
</template>

<script>
export default {
  methods: {
    del () {
      this.$emit('abc', arguments)
    }
  }
}
</script>
