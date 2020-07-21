/*
 * @Author: 托尼
 * @Date: 2020-07-21 20:01:19
 * @LastEditors: 托尼
 * @LastEditTime: 2020-07-21 20:27:54
 */ 

import React from 'react'
import ReactDOM from 'react-dom'
import Example from './Example'

ReactDOM.render(<Example />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
