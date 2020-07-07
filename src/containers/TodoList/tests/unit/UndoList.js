/* eslint-disable no-undef */
// 内部自带的
import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList'
import { findTestWrapper } from '../../../../utils/testUtils'

it('UndoList 参数为[]， count值应该为0,且列表无内容', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: []
    }
  })
  const countElem = findTestWrapper(wrapper, 'count')
  const listItems = findTestWrapper(wrapper, 'item')
  // 处理样 监听样式的变化 给出提示
  expect(countElem.at(0).text()).toEqual('0')
  expect(listItems.length).toEqual(0)
})

it('UndoList 参数为[]， count值应该为0,且列表有内容', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3]
    }
  })
  const countElem = findTestWrapper(wrapper, 'count')
  const listItems = findTestWrapper(wrapper, 'item')
  // 处理样 监听样式的变化 给出提示
  expect(countElem.at(0).text()).toEqual('3')
  expect(listItems.length).toEqual(3)
})

it('UndoList 参数为[]， count值应该为0,且列表有内容 且存在删除按钮', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3]
    }
  })
  const countElem = findTestWrapper(wrapper, 'count')
  const listItems = findTestWrapper(wrapper, 'item')
  const deleteButtons = findTestWrapper(wrapper, 'delete-button')
  // 处理样 监听样式的变化 给出提示
  expect(countElem.at(0).text()).toEqual('3')
  expect(listItems.length).toEqual(3)
  expect(deleteButtons.length).toEqual(3)
})

it('UndoList 被点击时候 向外触发删除事件', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3]
    }
  })
  const deleteButtons = findTestWrapper(wrapper, 'delete-button').at(1)
  deleteButtons.trigger('click')
  expect(wrapper.emitted().delete).toBeTruthy()
})
