import React from 'react'
import { useState } from 'react'

const AddItem = () => {

const [item,setItem] = useState('')

const handleFormSubmit = (e) => {
  e.preventDefault()
  console.log(item)
  setItem('')
}

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder='Enter Item' value={item} onChange={(e) => setItem(e.target.value)} />
      <button className="btn btn-primary">Add</button>
    </form>
  )
}

export default AddItem