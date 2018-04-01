import React, { Component } from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Faqs from './Pages/FAQs/FAQs'


const App = () => (
  <main>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/faqs' component={Faqs}/>
    </Switch>
  </main>
);

export default App;
