// Dependencies
import React from 'react'

const buttonCss = {
  border: 'none',
  padding: '12px 25px',
  cursor: 'pointer',
  fontSize: '16px',
  outline: 'none',
  textTransform: 'uppercase',
  fontWeight: '600',
  transition: 'width 2s',
  wordSpacing: '.1em',
}

const buttonFlat = (props) => {
  return (
    <div style={{marginTop: '40px'}}>
      <button style={buttonCss} 
      className="button-color-grey"
      onClick={props.handleClick ? props.handleClick : ''}>
        {props.children}
      </button>
    </div>
  )
}

export default buttonFlat