import React from 'react'

export default function TextInput(props) {
    const { customValue , onCustomChange , placeholder } = props
    return (
        <div>
  <input value={customValue} type="text" onChange={onCustomChange} class="form-control" placeholder={placeholder} aria-label="Enter Todo" aria-describedby="basic-addon2"/>
        </div>
    )
}
