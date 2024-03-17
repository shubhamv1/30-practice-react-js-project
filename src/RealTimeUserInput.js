import React from 'react'
import { useState } from 'react'
function RealTimeUserInput() {
    const[input,setInput]=useState('')
  return (
    <div>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <br/>
    User-Input: <br/>{input}
    </div>
  )
}

export default RealTimeUserInput
