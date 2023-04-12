

import React, { useState } from 'react'
import { useSWAPI } from './useSWAPI'
import { Link } from 'react-router-dom';
export default function About() {
  const [person, setPerson] = useState(1)

  const { isLoading, data } = useSWAPI(person)
  
  return (
    <div className="App">
      <h1>About</h1>
      <Link to="/">Home</Link>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '0 auto'

      }}>
        <button onClick={() => setPerson(1)}>Fetch Luke</button>
        <button onClick={() => setPerson(2)}>Fetch CP-3</button>
        <button onClick={() => setPerson(3)}>Fetch R2-D2</button>
        <button onClick={() => setPerson(4)}>Fetch DarthV</button>
      </div>

       
       
       
        <span>Loading {isLoading ? 'true' : 'false' }</span>
        <h1>Name: {data?.name}</h1>
        <p>Height: {data?.height}</p>
            
       
    </div>
  )
}
