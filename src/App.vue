<template>
  <div id="app">
    app
    <TodoList />
  </div>
</template>

<script>
import TodoList from './containers/TodoList/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style lang="stylus">

</style>
