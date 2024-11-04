import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { display } from './TextSlice'

function Text() {
const [state,setState]=useState('')
  const dispatch=useDispatch()
const handleClick=()=>{
  dispatch(display(state))
  setState('')
}
  return (
    <div>
      <input type="text" value={state} onChange={(e)=>setState((e.target.value)) } />
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Text