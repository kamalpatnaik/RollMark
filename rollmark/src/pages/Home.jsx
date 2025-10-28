import React from 'react'
import Carousal from '../components/Carousal'
import Cta from '../components/Cta'
import Status from '../components/Status'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'
import Features from '../components/Features'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <div>
        <Cta /><br />
        <Features/>
        <Blog/>
        <Status />
        <Testimonial/>
        <Reviews/>
    </div>
  )
}

export default Home