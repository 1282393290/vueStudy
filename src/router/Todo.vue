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
import Axios from 'axios'
export default {
  data () {
    return {
      inputVal: '',
      ones: []
    }
  },
  methods: {
    add () {
      this.ones.push({ name: this.inputVal, id: this.ones.length })
    },
    del () {
      this.ones.splice(arguments[0], 1)
    }
  },
  components: {
    TodoItem
  },
  created () {
    Axios('mockdata/info.json')
      .then(res => {
        this.ones = res.data.data
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
