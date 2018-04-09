import React from 'react'

import TeamData from './TeamData'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


const Team = () => (
  // <!--Team Starts-->
  <section className="uk-container team">
    <div className="uk-padding width-100"></div>
    <div className="uk-padding-small width-100"></div>

    <div className="uk-grid">
      <div className="uk-width-1-6@l"></div>
      <div className="uk-width-2-3@l">
        <h3 className={'section-title '}>People who dream Hapramp</h3>
        <div className="uk-padding width-100"></div>
        <div className="team-container uk-grid">

          {
            TeamData.map((data) => (
              <div className="uk-width-1-3@l uk-width-1-3@m uk-width-1-2@s uk-text-center uk-margin-large-bottom uk-flex uk-flex-center uk-flex-column uk-flex-middle">
                <div className="member-thumb">
                  <img src={data.imgSrc} alt={data.name} className="uk-border-circle"/>
                  <div className="thumb-overlay"></div>
                </div>
                <h4 className="member-name text-color-primary title-text uk-margin-remove-bottom text-primary uk-text-bold">{data.name}</h4>
                <h5 className="member-designation uk-text-small uk-text-uppercase color-black-a54 uk-margin-small-top text-grey-54">{data.designation}
                </h5>
                <div className="social-links">

                  {
                    data.socials.map(social => (
                      <a href={social.link} className="uk-text-large uk-padding-small text-primary uk-display-inline-block uk-padding-remove-top" target="_blank">
                        <FontAwesomeIcon
                          icon={social.icon} />
                      </a>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    <div className="uk-padding width-100"></div>
    <div className="uk-padding-small width-100"></div>
  </section>
);

export default Team