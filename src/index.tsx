/**
 * Created by tony on 2019-12-16
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Example from './Example'

ReactDOM.render(<Example />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
