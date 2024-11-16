import React from 'react'

function Input({type,placeholder,name}) {
  return (
    <div>
      <input type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

export default Input
