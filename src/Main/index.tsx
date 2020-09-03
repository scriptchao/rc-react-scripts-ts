/**
 * Created by tony on 2019-12-16
 */
import React from 'react'
import { a } from '@/Main/test'
import './index.less'

console.log(a)

const Main = (props) => {

  function onClick() {
    props.onChange && props.onChange()
  }

  return <div className="main" onClick={onClick}>Main</div>
}

export default Main
