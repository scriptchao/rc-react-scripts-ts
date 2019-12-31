/**
 * Created by tony on 2019/12/30
 */
import React from 'react'
import {shallow} from 'enzyme'

import Main from '../src/Main'

test('fist test', () => {
  const wrapper = shallow(<Main />)
  console.log(wrapper.html())

  expect(1).toBeTruthy()
})
