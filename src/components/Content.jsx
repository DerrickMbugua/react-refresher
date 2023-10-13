import React from 'react'

const Content = () => {

  const handleNameChange = () => {
    const names = ['Derrick', 'Mbugua', 'Mwema'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  const handleSubmit = () => {
    console.log("Clicked")
  }

  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleSubmit}>Submit</button>
    </main>
  )
}

export default Content