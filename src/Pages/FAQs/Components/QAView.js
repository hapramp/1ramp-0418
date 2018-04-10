import React from 'react'

import QAData from '../Data/FaqData'

const QAView = () => (
  // <!--Hero Starts-->
  <section className="uk-container qa-view">
    <div className="uk-padding width-100"></div>
    <div className="uk-grid">
      <div className="uk-width-1-6@m uk-width-1-4@xl"></div>
      <div className="uk-width-2-3@m uk-width-1-2@xl">
        <div className="qa-wrapper">
          {
            QAData.map((data)=> (
              <ul className="bg-white padding-24px" uk-accordion="multiple: false">
                <li>
                  <a className="uk-accordion-title text-grey-87 title-text uk-text-bold" href="#">{data.q}</a>
                  <div className="uk-accordion-content uk-margin-small-left">
                    <p>{data.a}</p>
                  </div>
                </li>
              </ul>
            ))
          }

        </div>
      </div>
    </div>
    <div className="uk-padding width-100"></div>
    <div className="uk-padding-small width-100"></div>
    <div className="uk-padding-small width-100"></div>
  </section>
);

export default QAView