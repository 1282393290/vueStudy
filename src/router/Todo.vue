<template>
  <div>
    <p><input type="text" :value="inputVal" @input="inputVal = $event.target.value"> <button @click="add">爱上</button></p>
    <ul>
      <TodoItem :ones="ones" @abc="del"></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  data () {
    return {
      inputVal: '',
      ones: []
    }
  },
  methods: {
    add () {
      var obj = { name: this.inputVal }
      this.$http.post('/todos', obj)
        .then(res => {
          alert('新增成功')
        })
        .catch(err => {
          alert(err.message)
        })
    },
    del () {
      this.$http.delete('/todos/' + arguments[0][1])
    }
  },
  components: {
    TodoItem
  },
  created () {
    this.$http('/todos')
      .then(res => {
        this.ones = res
        this.$nextTick(() => {
          console.log('数据获取成功')
          console.log(res)
        })
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
</script>

<style scoped>
  li {
    list-style: none;
    background: skyblue;
  }
</style>
