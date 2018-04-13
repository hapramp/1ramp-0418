import React from 'react'

import rewardImg from '../statics/img/earning_machine.png'

const Reward = () => (
  // <!--Reward Starts-->
  <section className="reward uk-container">
    <div className="uk-grid uk-margin-large-bottom">
      <div className="uk-padding width-100"></div>
      <div className="uk-padding-small width-100"></div>

      <div className="uk-grid">
        <div className="uk-width-1-3 uk-visible@l">
          <img src={rewardImg} alt=""/>
        </div>

        <div className="coin-row1 uk-width-2-3@l">
          <h3 className={'section-title '}>What can you do with the rewards?</h3>
          <div className="uk-padding-small width-100"></div>
          <div className="uk-grid">
            <div className="feat-item uk-width-1-2@s uk-margin-medium-top">
              <h4 className="feat-title title-text text-accent uk-text-uppercase uk-text-large">Withdraw</h4>
              <p className="feat-desc">Convert your steem tokens into fiat currency and directly withdraw into your bank
                account.
              </p>
            </div>
            <div className="feat-item uk-width-1-2@s uk-margin-medium-top">
              <h4 className="feat-title title-text text-accent uk-text-uppercase uk-text-large">Transfer
              </h4>
              <p className="feat-desc">Instantly transfer the steem tokens to anyone on the platform from your wallet.

              </p>
            </div>
          </div>

          <div className="uk-grid">
            <div className="feat-item uk-width-1-2@s uk-margin-medium-top">
              <h4 className="feat-title title-text text-accent uk-text-uppercase uk-text-large">Participate</h4>
              <p className="feat-desc">Pay in steem tokens to participate in contests and win Hapcoins or amazing
                prices.</p>
            </div>
            <div className="feat-item uk-width-1-2@s uk-margin-medium-top">
              <h4 className="feat-title title-text text-accent uk-text-uppercase uk-text-large">Hapstore</h4>
              <p className="feat-desc">Buy community-curated unique products from HapStore using steem tokens.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="uk-padding-small width-100"></div>
  </section>
);

export default Reward