import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'
// import Footer from './Footer'

const MainLayout = ({ children }) => {
    return (
        <div className='relative'>
            <PageTransition />
            <Navbar />
            <div className='pt-20 '>{children}</div>
            <Footer />
        </div>
    )
}

export default MainLayout