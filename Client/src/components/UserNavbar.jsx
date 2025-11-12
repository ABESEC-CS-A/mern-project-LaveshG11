import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const UserNavbar = () => {
  return (
    <div>
      <div className='navbar'>
      <Link to="/user">UserDashboard</Link>
      <Link to="cart">View Cart</Link>
      <Link to="order">My Order</Link>
      <Link to="profile">My Profile</Link>
      <Link to="logout">Logout</Link>
    </div>
    </div>
  )
}

export default UserNavbar
