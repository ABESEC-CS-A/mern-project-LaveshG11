import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../components/UserNavbar.jsx'

const UserDashboard = () => {
  return (
    <div>
      <Header/>
      <UserNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default UserDashboard
