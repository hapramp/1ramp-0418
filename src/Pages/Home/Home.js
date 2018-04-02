import React from 'react'

import './statics/css/Home.css'

const Home = () => (
  // <!--Hero Starts-->
  <div className="home">
    <div className="hero-wrapper">
      <div className="hero uk-flex uk-container">
        <div className="uk-grid uk-margin-large-bottom">
          <div className="uk-width-1-6@l"></div>
          <div className="hero-contents uk-width-2-3@l uk-width-1-1@m">
            <div className="grand-title text-color-white title-text uk-text-center">
              <strong>Rewarding</strong> social media for <strong>Creators</strong> like you
            </div>

            <div className="cta uk-margin-medium-top">
              <form id="early-access" action="">
                <div className="uk-margin uk-flex-center uk-flex" uk-margin>
                  <input id="early-access-input" className="email uk-width-1-2@s uk-input" type="email"
                         placeholder="Enter Your Email" name="email"
                         required/>

                  <button className="submit uk-button uk-button-default uk-text-bold">START EARNING</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home