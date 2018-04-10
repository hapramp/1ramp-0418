import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFb from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faTw from '@fortawesome/fontawesome-free-brands/faTwitter'
import faIns from '@fortawesome/fontawesome-free-brands/faInstagram'
import faMedium from '@fortawesome/fontawesome-free-brands/faMediumM'
import steemIcon from '../statics/img/steem.png'

const Hero = () => (
  // <!--Hero Starts-->
  <section className="hero-about-wrapper">
    <div className="hero-about uk-container">
      <div className="uk-padding width-100"></div>
      <div className="hero-faq-contents uk-margin-auto-right uk-margin-auto-left uk-margin-medium-bottom">
        <div className="grand-title text-color-white uk-text-center title-text section-title">
          About
        </div>
      </div>

      <div className="faq-groups uk-flex uk-flex-column uk-flex-center">
        <div className="">
          <h5 className='uk-text-center uk-text-bold'>Connect with us</h5>
          <div className="large-cta-icons-container uk-text-center uk-flex uk-flex-center uk-flex-wrap">
            <a href="" className="large-cta-icon uk-margin-medium-right text-primary uk-flex-inline"
               target="_blank">
              <span className="uk-padding-small uk-border-circle uk-margin-small-bottom uk-text-large text-line-height-1 bg-white">
                <FontAwesomeIcon
                  icon={faFb} />
              </span>
            </a>

            <a href="" className="large-cta-icon uk-margin-medium-right text-primary uk-flex-inline"
               target="_blank">
              <span className="uk-padding-small uk-border-circle uk-margin-small-bottom uk-text-large text-line-height-1 bg-white">
                <FontAwesomeIcon
                  icon={faTw} />
              </span>
            </a>

            <a href="" className="large-cta-icon uk-margin-medium-right text-primary uk-flex-inline"
               target="_blank">
              <span className="uk-padding-small uk-border-circle uk-margin-small-bottom uk-text-large text-line-height-1 bg-white">
                <FontAwesomeIcon
                  icon={faIns} />
              </span>
            </a>

            <a href="" className="large-cta-icon uk-margin-medium-right text-primary uk-flex-inline"
               target="_blank">
              <span className="uk-padding-small uk-border-circle uk-margin-small-bottom uk-text-large text-line-height-1 bg-white">
                <FontAwesomeIcon
                  icon={faMedium} />
              </span>
            </a>

            <a href="" className="large-cta-icon text-primary uk-flex-inline" target="_blank">
              <span className="uk-padding-small uk-border-circle uk-margin-small-bottom bg-white  uk-text-large text-line-height-1">
                <img src={steemIcon} alt="Steem Logo"/>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="uk-padding width-100"></div>
    </div>
  </section>
);

export default Hero