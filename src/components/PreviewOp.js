import React from 'react'
import './PreviewOp.css'

const PreviewOp = ({ value }) => {
  return (
    <input type="text" value={value} className='preview-op' />
  )
}

export default PreviewOp