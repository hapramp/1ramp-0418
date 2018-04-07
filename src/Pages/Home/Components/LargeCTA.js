import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGooglePlay from '@fortawesome/fontawesome-free-brands/faGooglePlay'
import faChrome from '@fortawesome/fontawesome-free-brands/faChrome'

const LargeCTA = () => (
  // <!--Reward Starts-->
  <section className="large-CTA uk-background-cover">
    <div className="uk-container">
      <div className="uk-padding width-100"></div>
      <h3 className='section-title section-title-inverted uk-text-center'>Launching soon on</h3>
      <div className="uk-padding-small width-100"></div>

      <div className="large-cta-icons-container uk-text-center">
        <a href="" className="large-cta-icon uk-margin-right text-white uk-flex-inline" target="_blank"><FontAwesomeIcon
          icon={faGooglePlay} size={`4x`}/>
          <div className="uk-text-small uk-text-bold uk-margin-small-top">PlayStore</div>
        </a>
        <a href="" className="large-cta-icon text-white uk-flex-inline" target="_blank"><FontAwesomeIcon icon={faChrome} size={`4x`}/>
          <div className="uk-text-small uk-text-bold uk-margin-small-top">Chrome</div>
        </a>
      </div>

      <div className="cta uk-margin-medium-top">
        <form id="early-access" action="">
          <div className="uk-margin uk-flex-center uk-flex" uk-margin>
            <input id="early-access-input" className="email uk-width-1-3@l uk-input" type="email"
                   placeholder="Enter Your Email" name="email"
                   required/>

            <button className="submit uk-button uk-button-default uk-text-bold">START EARNING</button>
          </div>
        </form>
      </div>
      <div className="uk-padding width-100"></div>
    </div>
  </section>
);

export default LargeCTA