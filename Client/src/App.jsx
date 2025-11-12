import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/about' element= {<h1>About Page</h1>}/>
          <Route path='/contact' element= {<h1>Contact Page</h1>}/>
          <Route path='/login' element= {<h1>Login Page</h1>}/>
          <Route path='/register' element= {<h1>Register Page</h1>}/>
          <Route path='*' element= {<h1>404 Not Found Error Page</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
