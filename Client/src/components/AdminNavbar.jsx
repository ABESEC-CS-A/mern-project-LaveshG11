import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const AdminNavbar = () => {
  return (
    <div className='navbar'>
      <Link to="/admin">AdminDashboard</Link>
      <Link to="additem">Add Item</Link>
      <Link to="viewitem">View Item</Link>
      <Link to="adduser">Add User</Link>
      <Link to="viewuser">View User</Link>
      <Link to="logout">Logout</Link>
    </div>
  )
}

export default AdminNavbar
