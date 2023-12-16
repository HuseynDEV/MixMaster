import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
    return (
        <div>
          <Navbar/>
            <div className="page">
            <Outlet />
            </div>
        </div>
    )
}

export default HomeLayout