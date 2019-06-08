<template>
  <div><li v-for="(one,index) in $attrs.ones" :key="one.id">{{one.name}}---{{index}}------ <button @click="del(index)">删除</button></li></div>
</template>

<script>
export default {
  methods: {
    del () {
      this.$emit('abc', arguments[0])
    }
  }
}
</script>
