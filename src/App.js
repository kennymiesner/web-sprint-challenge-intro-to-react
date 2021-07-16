import React, { useState, useEffect } from 'react'; // Import state and effect hooks
import axios from 'axios' // Import axios
import { BASE_URL } from './constants' // Import repeated base url
import Character from './components/Character' // Import character component
import logo from './images/logo-star-wars.svg' // Import logo for header
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${BASE_URL}/api/people`)
    .then(res => {
      setCharacters(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <header>
        <img className="logo" src={logo} alt="Star Wars Logo"/>
        <h1 className="Header">Characters</h1>
      </header>
      {
        characters.map((character) => {
          return <Character key={character.name} info={character} />
        })
      }
    </div>
  );
}

export default App;
