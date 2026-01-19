import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect((() =>{
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }))

  return (
    <>
      <h1>I have to do my own fullstack project</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((jokes)=>(
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
