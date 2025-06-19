import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Tester from './Components/Tester'

function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/test' element={<Tester/>}/>

      </Routes>
      </BrowserRouter>
  </>
  )
}

export default App
