<template>
  <div>
    <div data-test='count'>{{list.length}}</div>
    <ul>
      <li v-for='(item,index) in list' :key="index"
        data-test='item'
      >
      {{item}}
      <span data-test='delete-button' @click="()=>{handleDa}">-</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list']

}
</script>

<style  module>

</style>
