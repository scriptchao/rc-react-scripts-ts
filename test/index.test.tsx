/**
 * Created by tony on 2019/12/30
 */
import React from 'react'
import { shallow } from 'enzyme'
import Component from '../src/Main'

test('fist test', async () => {
  const wrapper = shallow(<Component />)
  console.log(wrapper.text())
  expect(wrapper.text()).toBe('Main')
  debugger
})
