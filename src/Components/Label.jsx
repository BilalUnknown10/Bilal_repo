import React from 'react'

function Label({htmlFor,label}) {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  )
}

export default Label
