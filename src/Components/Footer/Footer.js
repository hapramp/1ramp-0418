import React from 'react'
import {NavLink} from 'react-router-dom'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFb from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faTw from '@fortawesome/fontawesome-free-brands/faTwitter'
import faIns from '@fortawesome/fontawesome-free-brands/faInstagram'
import faMedium from '@fortawesome/fontawesome-free-brands/faMediumM'
import steemIcon from './statics/img/steem.png'
import hasuraLogo from './statics/img/hasura-logo-F2B634BFC4-seeklogo.com.png'
import amazonLogo from './statics/img/amazon.png'


import './statics/css/Footer.css'

const Footer = () => (
  <footer className="footer uk-overflow-hidden">
    <div className="uk-container">
      <div className="uk-padding width-100"></div>
      <div className="uk-grid">
        <div className="uk-width-1-6@l"></div>

        <div className="uk-width-1-6@l">
          <h4 className="section-title">Links</h4>
          <div className="uk-padding-small width-100"></div>
          <div className="links-container">
            <ul className="uk-list uk-text-uppercase footer-link-list">
              <li className="uk-margin-small-bottom"><NavLink exact to='/'>Home</NavLink></li>
              <li className="uk-margin-small-bottom"><NavLink exact to='/about'>About</NavLink></li>
              <li className="uk-margin-small-bottom"><NavLink exact to='/faqs'>FAQs</NavLink></li>

            </ul>
          </div>
        </div>

        <div className="uk-width-1-3@l">
          <h4 className="section-title">Follow us for Updates</h4>
          <div className="uk-padding-small width-100"></div>
          <div className="socials-links-container">
            <ul className="uk-list uk-text-uppercase social-link-list">
              <li
                className="uk-margin-small-bottom uk-display-inline-block uk-margin-remove-top uk-margin-medium-right">
                <a href="" className="uk-text-large text-primary" target="_blank"><FontAwesomeIcon icon={faFb}/></a>
              </li>
              <li
                className="uk-margin-small-bottom uk-display-inline-block uk-margin-remove-top uk-margin-medium-right">
                <a href="" className="uk-text-large text-primary" target="_blank"><FontAwesomeIcon icon={faTw}/></a>
              </li>
              <li
                className="uk-margin-small-bottom uk-display-inline-block uk-margin-remove-top uk-margin-medium-right">
                <a href="" className="uk-text-large text-primary" target="_blank"><FontAwesomeIcon icon={faIns}/></a>
              </li>
              <li
                className="uk-margin-small-bottom uk-display-inline-block uk-margin-remove-top uk-margin-medium-right">
                <a href="" className="uk-text-large text-primary" target="_blank"><FontAwesomeIcon icon={faMedium}/></a>
              </li>

              <li
                className="uk-margin-small-bottom uk-display-inline-block uk-margin-remove-top uk-margin-medium-right">
                <a href="" className="uk-text-large text-primary uk-flex" target="_blank"><img src={steemIcon} alt=""/></a>
              </li>

            </ul>

            <div className="email">
              <div className="text-primary uk-text-uppercase">Email</div>
              <a className="text-grey-54" href="mailto:hi@hapramp.com">hi@hapramp.com</a>
            </div>
          </div>
        </div>
        <div className="uk-width-1-6@l">
          <h4 className="section-title">Powered by</h4>
          <div className="uk-padding-small width-100"></div>
          <div className="socials-links-container">
            <ul className="uk-list uk-text-uppercase social-link-list uk-text-center">
              <li
                className="uk-margin-small-bottom uk-display-inline-block uk-margin-remove-top uk-margin-medium-right">
                <a href="" className="uk-text-large text-primary uk-flex uk-margin-small-bottom" target="_blank"><img
                  src={hasuraLogo} alt=""/></a></li>

              <li
                className="uk-margin-small-bottom uk-display-inline-block uk-margin-remove-top uk-margin-medium-right">
                <a href="" className="uk-text-large text-primary uk-flex amazon-logo" target="_blank"><img
                  src={amazonLogo} alt=""/></a></li>

            </ul>
          </div>
        </div>
      </div>
      <div className="uk-padding-small width-100"></div>
    </div>
  </footer>
);

export default Footer