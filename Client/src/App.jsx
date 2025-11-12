import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import './App.css'
import UserDashboard from './pages/UserDashboard.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}>
            <Route path='about' element= {<h1>About Page</h1>}/>
            <Route path='contact' element= {<h1>Contact Page</h1>}/>
            <Route path='login' element= {<h1>Login Page</h1>}/>
            <Route path='register' element= {<h1>Register Page</h1>}/>
          </Route>
          <Route path='/user' element= {<UserDashboard/>}>
            <Route path='cart' element= {<h1>View Cart</h1>}/>
            <Route path='order' element= {<h1>My Order</h1>}/>
            <Route path='profile' element= {<h1>My Profile</h1>}/>
            <Route path='logout' element= {<h1>Logout Successfully</h1>}/>
          </Route>
          <Route path='/admin' element= {<h1>Admin Dashboard</h1>}>
            <Route path='additem' element= {<h1>Add Item</h1>}/>
            <Route path='viewitem' element= {<h1>View Item</h1>}/>
            <Route path='adduser' element= {<h1>Add User</h1>}/>
            <Route path='viewuser' element= {<h1>View User</h1>}/>
            <Route path='logout' element= {<h1>Logout Successfully</h1>}/>
          </Route>
          <Route path='*' element= {<h1>404 Not Found Error Page</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
