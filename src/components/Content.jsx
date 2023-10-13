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

  const handleSubmit2 = (name) => {
    console.log(`${name} was clicked`)
  }

  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleSubmit}>Submit</button> <br/>
      <button onClick={() => handleSubmit2('Derro')}>Submit2</button>
    </main>
  )
}

export default Content