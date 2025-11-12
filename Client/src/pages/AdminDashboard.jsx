import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar.jsx'
import UserNavbar from '../components/UserNavbar.jsx'


const AdminDashboard = () => {
  return (
    <div>
      <Header/>
      <AdminNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AdminDashboard
