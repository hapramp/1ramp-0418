import React from 'react'
import Hero from './Components/Hero'
import Community from './Components/Community'
import Earn from './Components/Earn'
import Contest from './Components/Contest'
import Reward from './Components/Reward'
import VideoSection from './Components/VideoSection'
import LargeCTA from './Components/LargeCTA'

import './statics/css/Home.css'

const Home = () => (
  // <!--Hero Starts-->
  <div className="home">
    <Hero/>
    <Community/>
    <Earn/>
    <Contest/>
    <Reward/>
    <VideoSection/>
    <LargeCTA/>
  </div>
);

export default Home