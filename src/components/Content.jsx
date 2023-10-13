import React from 'react'
import { useState } from 'react';

const Content = ({name, count, increment, handleNameChange}) => {

  return (
    <main>
      <p>Hello {name}</p><br />
      <p>{count}</p><br />
      <button onClick={increment}>Increment</button> <br />
      <button onClick={handleNameChange}>Change Name</button> <br />
      {/* <button onClick={() => handleSubmit2('Derro')}>Submit2</button> */}
    </main>
  )
}

export default Content