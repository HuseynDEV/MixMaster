import React from 'react'
import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading'
    return (
        <div>
            <Navbar />
            <div className="page">
                {isPageLoading? <div></div>:<Outlet />}
            </div>
        </div>
    )
}

export default HomeLayout