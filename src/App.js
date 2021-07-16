import React, { useState, useEffect } from 'react'; // Import state and effect hooks
import axios from 'axios' // Import axios
import Character from './components/Character' // Import character component
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      setCharacterData(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
    </div>
  );
}

export default App;
