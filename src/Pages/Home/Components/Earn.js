import React from 'react'

import rewardImg from '../statics/img/earn_illustration.png'

const Earn = () => (
  // <!--Reward Starts-->
  <section className="earn uk-flex uk-container">
    <div className="uk-grid uk-margin-large-bottom">
      <div className="uk-padding width-100"></div>
      <div className="uk-padding-small width-100"></div>

      <div className="split-contents uk-width-1-2@m">
        <img src={rewardImg} alt="" className="split-large-img"/>
      </div>

      <div className="split-content uk-width-1-2@m">
        <h3 className={'section-title '}>EARN REWARD BY SHARING YOUR WORK</h3>
        <div className="uk-padding-small width-100"></div>
        <p>
          We don’t know if you’ve heard this or not <strong>‘If you are good at something, don’t post it for
          free’</strong>. True saying.
          The work that you post for free on the internet platforms carries an intrinsic value. You deserve
          to <strong>earn</strong> monetary <strong>rewards</strong> for sharing useful and valuable content with the
          communities.
        </p>
        <p>
          On HapRamp, you earn <strong>STEEM dollars</strong> for the ratings received on your content.
        </p>
        <a href="#" className="cta-split-screen text-accent uk-text-uppercase uk-display-inline-block"
           target={'_blank'}>SignUp for Early Access</a>
      </div>
    </div>
  </section>
);

export default Earn