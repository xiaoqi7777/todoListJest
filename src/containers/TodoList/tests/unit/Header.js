/* eslint-disable no-undef */
// 内部自带的
import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'
import { findTestWrapper } from '../../../../utils/testUtils'
it('Header 样式发生改变 做提示', () => {
  const wrapper = shallowMount(Header)
  // 处理样 监听样式的变化 给出提示
  expect(wrapper).toMatchSnapshot()
})

it('Header 包含 input 框', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"]')
  // exists是否存在
  expect(input.exists()).toBe(true)
})

it('Header 中 input 框初始内容为空', () => {
  const wrapper = shallowMount(Header)
  const inputValue = wrapper.vm.$data.inputValue
  // exists是否存在
  expect(inputValue).toBe('')
})

it('Header 中 input 框值发生变化,数据应该跟着变', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('dell lee')
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('dell lee')
})

it('Header 中 input 框输入回车,无内容时,无反应', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('')
  input.trigger('keyup.enter')
  // 当数据为空 回撤的时候 事件不被触发
  expect(wrapper.emitted().add).toBeFalsy()
})

it('Header 中 input 框输入回车,有内容时,向外触发事件,同时情况 inputValue', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('dell lee')
  input.trigger('keyup.enter')
  // 当有数据 回撤的时候 事件被触发 同时情况数据
  expect(wrapper.emitted().add).toBeTruthy()
  expect(wrapper.vm.$data.inputValue).toBe('')
})
