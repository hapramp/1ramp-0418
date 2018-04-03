import React from 'react'

const Chars = (props) => {

  const onMouseEnter = () => {
    props.handleMouseEnter(props.charId);
  };

  return (
    <div onMouseEnter={onMouseEnter} className="char-container uk-margin-medium-right uk-text-center">

      <div className="char-bg-plus-char">
        <div className="char-bg">
          <svg width="130" height="93" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M64.819 90.839c34.693 0 62.818-28.125 62.818-62.819C127.637-6.673 2-6.673 2 28.02 2 62.714 30.125 90.84 64.819 90.84z"
              stroke={props.charData.color} strokeWidth="3" fill="#FFF" fillRule="evenodd"/>
          </svg>
        </div>

        <img src={`${props.charData.imgSrc}`} alt="Art Character"/>
      </div>
      <div className='char-comm uk-text-uppercase uk-margin-small-top'> {props.charData.name}</div>
    </div>
  )
};

export default Chars