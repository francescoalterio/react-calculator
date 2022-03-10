import React from 'react'
import './CurrentOp.css'

const CurrentOp = ({ operation }) => {
  return (
    <input className='current-op' type="text" value={operation}  />
  )
}

export default CurrentOp