import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import HomeScreen from "./Dashboard/HomeScreen"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
     <Navbar/>
     <HomeScreen/>
    </div>
  )
}

export default App
