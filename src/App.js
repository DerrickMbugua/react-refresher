import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

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
    <div className="App">
      <Header title="My List" />
      <Content
        name={name}
        count={count}
        increment={increment}
        handleNameChange={handleNameChange}
      />
      <Footer />
    </div>
  );
}

export default App;
