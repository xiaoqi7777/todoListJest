<template>
  <div class="hello">
    <Header @add="addUndoItem" />
    <ul>
      <li v-for='item in undoList' :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (inputValue) {
      this.undoList.push(inputValue)
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="stylus">
ul{
  list-style:none
}
</style>
