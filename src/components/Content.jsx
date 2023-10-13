import React from 'react'
import { useState } from 'react';

const Content = () => {

  const [name, setName] = useState('Derrick');
  const [count, setCount] = useState(0)
  const handleNameChange = () => {
    const names = ['Sparta', 'Mbugua', 'Mwema'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  const handleSubmit = () => {
    console.log("Clicked")
  }

  const handleSubmit2 = (name) => {
    console.log(`${name} was clicked`)
  }

  const increment = () => {
    // setCount((prevState)=> prevState +1 )
    setCount(count + 1)
  }

  return (
    <main>
      <p>Hello {name}</p><br />
      <p>{count}</p><br />
      <button onClick={increment}>Increment</button> <br />
      <button onClick={handleNameChange}>Change Name</button> <br />
      <button onClick={() => handleSubmit2('Derro')}>Submit2</button>
    </main>
  )
}

export default Content