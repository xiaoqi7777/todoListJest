<template>
  <div :class="$style.header">
    <div :class="$style.headerContent">
      TodoList1111
      <input
      :class="$style.headerInput"
        data-test='input'
        v-model='inputValue'
        @keyup.enter='addTodoItem'
        placeholder="TodoList!"
        />
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style  module>
.header{
  line-height: 60px;
  background :#666;
}
.headerContent{
  width:600px;
  margin: 0 auto;
  color: #fff;
  font-size: 24px;
}
.headerInput{
  float: right;
  width: 260px;
  margin-top: 12px;
  line-height: 24px;
  outline: none;
  color:#333;
  text-indent: 10px;
}
</style>
