import React, { useEffect } from 'react'
import Banner from '../components/Landing/Banner'
import SectionTwo from '../components/Landing/SectionTwo'
import SectionThree from '../components/Landing/SectionThree'
import SectionFour from '../components/Landing/SectionFour'
import SectionFive from '../components/Landing/SectionFive'

const Landing = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <div>
            <Banner />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </div>
    )
}

export default Landing