import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Features from '../components/sections/Features'
import Collection from '../components/sections/Collection'
import Banner from '../components/sections/Banner'
import Blogs from '../components/sections/Blogs'
import Steps from '../components/sections/Steps'
import Brands from '../components/sections/Brands'
import Shop from '../components/sections/Shop'
import Team from '../components/sections/Team'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Features />
            <Steps />
            <Brands />
            <Shop />
            <Collection />
            <Team />
            <Banner />
            <Blogs />
        </>
    )
}

export default Home