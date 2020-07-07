/* eslint-disable no-undef */
// 内部自带的
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../../TodoList'
import Header from '../../components/Header'

it('todoList 初始化', () => {
  const wrapper = shallowMount(HelloWorld)
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([])
})

it('todoList 监听到header的add事件时 addItem 的时候 会增加一个内容', () => {
  const wrapper = shallowMount(HelloWorld)
  const header = wrapper.find(Header)
  header.vm.$emit('add', 'abc')
  // wrapper.vm.addUndoItem('abc')
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual(['abc'])
})
