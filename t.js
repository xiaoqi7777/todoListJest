/* eslint-disable no-undef */
// 内部自带的
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  // it('renders props.msg when passed', () => {
  //   const root = document.createElement('div')
  //   root.className = 'root'
  //   document.body.appendChild(root)
  //   new Vue({
  //     render: h => h(HelloWorld, {
  //       props: {
  //         msg: 'dell lee'
  //       }
  //     })
  //   }).$mount('.root')
  //   expect(document.getElementsByClassName('hello').length).toBe(1)
  //   console.log(document.body.innerHTML)
  // })
  // it('renders props.msg when passed', () => {
  //   const msg = 'dell lee'
  //   // shallowMount 浅渲染 不会渲染子组件 单元测试  mount 就是全部渲染
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  //   expect(wrapper.props('msg')).toEqual(msg)
  //   wrapper.setProps({ msg: 'hello' })
  //   expect(wrapper.props('msg')).toEqual('hello')
  //   // find findAll返回多个
  //   expect(wrapper.findAll('.mmm').length).toBe(1)
  // })
  it('组件渲染正常', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: 'dell le' }
    })
    // 组件一旦变化 就会提示报错
    expect(wrapper).toMatchSnapshot()
  })
})
