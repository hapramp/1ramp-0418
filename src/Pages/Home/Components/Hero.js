import React from 'react'

const Hero = () => (
  // <!--Hero Starts-->
  <section className="hero-wrapper">
    <div className="hero uk-flex uk-container">
      <div className="uk-grid uk-margin-large-bottom">
        <div className="uk-width-1-6@m"></div>
        <div className="hero-contents uk-width-2-3@l uk-width-2-3@m">
          <div className="grand-title text-color-white title-text uk-text-center">
            <strong>Rewarding</strong> social media for <strong>Creators</strong> like you
          </div>

          <div className="cta uk-margin-medium-top">
            <form id="early-access" action="">
              <div className="uk-margin uk-flex-center uk-flex form-container" uk-margin>
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
  </section>
);

export default Hero