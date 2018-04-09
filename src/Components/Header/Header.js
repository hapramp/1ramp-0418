import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from './statics/img/logo_hapramp_regular.png'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGooglePlay from '@fortawesome/fontawesome-free-brands/faGooglePlay'
import faChrome from '@fortawesome/fontawesome-free-brands/faChrome'

import './statics/css/Header.css'

const Header = () => (

  <header className="hr-header" is uk-sticky="show-on-up: true;animation: uk-animation-slide-top;">

    <div className="uk-container">
      <nav className="uk-navbar uk-navbar-container uk-navbar-transparent">

        <div className="uk-navbar-left">
          <NavLink className="uk-navbar-item uk-logo title-text uk-text-bold text-primary" exact to='/'>
            <img className="logo-icon" src={logo} alt="HapRamp Logo"/> <span className=" uk-visible@s">HAPRAMP</span>
          </NavLink>
        </div>

        <div className="uk-navbar-center uk-nav-center-sm">
          <ul className="uk-navbar-nav">
            <li><NavLink className="title-text" exact to='/' activeClassName="active">Home</NavLink></li>
            <li><NavLink className="title-text" to='/about' activeClassName="active">About</NavLink></li>
            <li><NavLink className="title-text" exact to='/faqs' activeClassName="active">FAQs</NavLink></li>
          </ul>
        </div>

        <div className="uk-navbar-right uk-nav-center-sm uk-visible@s">
          <span className="uk-text-uppercase uk-margin-small-right uk-visible@m">Launching Soon On</span>
          <a href="" className="uk-margin-small-right uk-text-large text-primary" target="_blank"><FontAwesomeIcon
            icon={faGooglePlay}/></a>
          <a href="" className="uk-text-large text-primary" target="_blank"><FontAwesomeIcon icon={faChrome}/></a>


        </div>

      </nav>
    </div>
  </header>
);

export default Header