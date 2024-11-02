import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Data from './components/Data'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/d" element={<Data/>}/>
          <Route path="/f" element={<Form/>}/>
        </Routes>
    </>
  )
}

export default App
