import React from 'react'
import Hero from './Components/Hero'
import Community from './Components/Community'
import Rewards from './Components/Rewards'
import Contest from './Components/Contest'

import './statics/css/Home.css'

const Home = () => (
  // <!--Hero Starts-->
  <div className="home">
    <Hero/>
    <Community/>
    <Rewards/>
    <Contest/>
  </div>
);

export default Home