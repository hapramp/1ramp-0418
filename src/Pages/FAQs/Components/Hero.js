import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTelegram from "@fortawesome/fontawesome-free-brands/faTelegramPlane";
import faSlack from "@fortawesome/fontawesome-free-brands/faSlackHash";

const Hero = () => (
  // <!--Hero Starts-->
  <section className="hero-faq-wrapper">
    <div className="hero-faq uk-container">
      <div className="uk-padding width-100"></div>
      <div className="hero-faq-contents uk-margin-auto-right uk-margin-auto-left uk-margin-medium-bottom">
        <div className="grand-title text-color-white uk-text-center title-text section-title">
          FAQs
        </div>
      </div>

      <div className="faq-groups uk-flex uk-flex-column uk-flex-center">
        <div className="">
          <h5 className='uk-text-center uk-text-bold'>Join our Groups for Any doubts or suggestion? </h5>
          <div className="large-cta-icons-container uk-text-center">
            <a href="" className="large-cta-icon uk-margin-medium-right text-primary uk-flex-inline"
               target="_blank">
              <span className="uk-padding-small uk-border-circle uk-margin-small-bottom uk-text-large text-line-height-1 bg-white">
                <FontAwesomeIcon
                  icon={faTelegram} />
              </span>
            </a>

            <a href="" className="large-cta-icon text-primary uk-flex-inline" target="_blank">
              <span className="uk-padding-small uk-border-circle uk-margin-small-bottom bg-white  uk-text-large text-line-height-1">
                <FontAwesomeIcon
                  icon={faSlack}/>
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