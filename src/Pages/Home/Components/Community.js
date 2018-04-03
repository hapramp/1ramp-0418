import React, {Component} from 'react'

import charArtLarge from '../statics/img/chars/zulu_char_art_large.png'


import community from './CommunityData'
import Chars from './Character'


class Community extends Component {

  constructor(props) {
    super(props);
    this.state = {activeChar: 1};
  }


  handleMouseEnter(charId) {
    this.setState({activeChar: charId});
  }

  render() {
    return (
      // <!--Community Starts-->
      <section className="community uk-flex uk-container">
        <div className="uk-grid uk-margin-large-bottom">
          <div className="uk-padding width-100"></div>
          <div className="uk-padding-small width-100"></div>
          <h3 className={'section-title '}>Join communities of your interest</h3>
          <div className="uk-padding width-100"></div>
          <div className="uk-padding-small width-100"></div>

          <div className="char-wrapper uk-width-2-3@m uk-flex uk-flex-wrap">

            {
              community.map((char, index) => (
                <Chars handleMouseEnter={this.handleMouseEnter.bind(this)} key={index} charId={index} charData={char}/>
              ))
            }

            <Chars handleMouseEnter={this.handleMouseEnter.bind(this)} key={0} charId={0} charData={community[0]}/>
            <Chars handleMouseEnter={this.handleMouseEnter.bind(this)} key={1} charId={1} charData={community[1]}/>
            <Chars handleMouseEnter={this.handleMouseEnter.bind(this)} key={2} charId={2} charData={community[2]}/>

          </div>
          <div className="uk-width-1-3@l char-large-container">
            <img className={'char-large'} src={community[this.state.activeChar].imgLargeSrc} alt=""/>
          </div>
        </div>
      </section>
    )
  }
};

export default Community