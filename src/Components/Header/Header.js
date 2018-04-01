import React from 'react'
import {NavLink} from 'react-router-dom'

// import './Header.css'

const Header = () => (
  <div className="uk-container">
    <header is uk-sticky="show-on-up: true;animation: uk-animation-slide-top;">
      <nav className="uk-navbar uk-navbar-container uk-navbar-transparent">
        <div className="uk-navbar-right uk-nav-center-sm">
          <ul className="uk-navbar-nav">
            <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>
            <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
            <li><NavLink exact to='/faqs' activeClassName="active">FAQs</NavLink></li>
            {/*<li><NavLink to='/collections' activeClassName="active">Collections</NavLink></li>*/}
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header