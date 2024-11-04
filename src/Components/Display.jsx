import React from 'react'
import {useSelector} from 'react-redux'

function Display() {
    const text =useSelector((state)=>state.text.value)
  return (
    <div>{text}</div>
  )
}

export default Display