import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTelegram from "@fortawesome/fontawesome-free-brands/faTelegramPlane";
import faSlack from "@fortawesome/fontawesome-free-brands/faSlackHash";


const FAQs = () => (
  // <!--Reward Starts-->
  <section className="faqs uk-flex uk-container">
    <div className="uk-grid uk-margin-large-bottom uk-position-relative">
      <div className="uk-padding width-100"></div>
      <div className="uk-padding-small width-100"></div>

      <div className="split-content uk-width-1-2@l uk-width-1-1@m">
        <h3 className={'section-title '}>FAQs</h3>
        <div className="uk-padding-small width-100"></div>

        <div className="faq uk-margin-medium-bottom">
          <p className="faq-question uk-text-bold text-grey-87">
            How to create an account on HapRamp?
          </p>
          <p className="faq-answers">
            HapRamp is build on technology of steemit.com. To join HapRamp, first you need to sign-up on steemit.com.
            Create an account on Steemit now and join our early invite list. Once HapRamp is live, we’ll inform you.

          </p>
        </div>

        <div className="faq uk-margin-medium-bottom">
          <p className="faq-question uk-text-bold text-grey-87">
            How do I earn rewards for posting content on HapRamp?
          </p>
          <p className="faq-answers">
            On HapRamp, users can rate posts and blogs on a scale of 1 to 5. You will earn STEEM dollars according to
            the ratings you receive and who is rating your content.

          </p>
        </div>

        <div className="faq uk-margin-medium-bottom">
          <p className="faq-question uk-text-bold text-grey-87">
            What is the value of rewards that users earn on HapRamp?
          </p>
          <p className="faq-answers">
            Users earn STEEM dollars on HapRamp. At present 1 STEEM dollar is around 1.9 USD. STEEM dollar is a
            cryptocurrency.
          </p>
        </div>

        <a href="#" className="cta-split-screen text-accent uk-text-uppercase uk-display-inline-block"
           target={'_blank'}>Show More</a>

      </div>

      <div className="faq-seperator uk-position-absolute"></div>

      <div className="faq-groups uk-width-1-2@m uk-width-1-1@m uk-flex uk-flex-column uk-flex-center">
        <div className="">
          <h5 className='uk-text-center uk-text-bold'>Join our Groups for Any doubts or suggestion? </h5>
          <div className="uk-padding-small width-100"></div>
          <div className="large-cta-icons-container uk-text-center">
            <a href="" className="large-cta-icon uk-margin-medium-right text-primary uk-flex-inline"
               target="_blank">
              <span className="circle-bg uk-margin-small-bottom text-line-height-1">
                <FontAwesomeIcon
                                 icon={faTelegram} size={`3x`}/>
              </span>
              <div className="uk-text-bold">Telegram Group</div>
            </a>

            <a href="" className="large-cta-icon text-primary uk-flex-inline" target="_blank">
              <span className="circle-bg uk-margin-small-bottom text-line-height-1">
                <FontAwesomeIcon
                  icon={faSlack} size={`3x`}/>
              </span>
              <div className="uk-text-bold">Slack Group</div>
            </a>
          </div>
        </div>
      </div>
      <div className="uk-padding width-100"></div>
      <div className="uk-padding-small width-100"></div>
    </div>
  </section>
);

export default FAQs