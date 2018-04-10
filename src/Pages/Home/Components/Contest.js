import React from 'react'

import contestImg from '../statics/img/contest.png'

const Contest = () => (
  // <!--Reward Starts-->
  <section className="contest uk-flex uk-container">
    <div className="uk-grid uk-margin-large-bottom">
      <div className="uk-padding width-100"></div>
      <div className="uk-padding-small width-100"></div>

      <div className="split-content uk-width-1-2@m uk-flex-last">
        <h3 className={'section-title '}>Participate in Exciting Contests</h3>
        <div className="uk-padding-small width-100"></div>
        <p>
          A bit of show off is always fun. Fight some cool creative battles to <strong>win rewards</strong>.
        </p>
        <p>
          On HapRamp, you’ll find a number of contests running in all the communities. You can <strong>participate</strong> in contests by paying a nominal fee from the rewards you earned. Everybody <strong>wins</strong> something and public voting will decide the rank list.
        </p>
        <a href="#" className="cta-split-screen text-accent uk-text-uppercase uk-display-inline-block"
           target={'_blank'}>SignUp for Early Access</a>
      </div>

      <div className="split-contents uk-width-1-2@m">
        <img src={contestImg} alt="" className="split-large-img"/>
      </div>
    </div>
  </section>
);

export default Contest