// Dependencies
import React from 'react'

const coverPage = (props) => {
  return (
    <div className="rc-container-title-head">
      <div className="rc-bg-image">
        <div style={props.imageProp}></div>
        <div className="imageBGoverlay"></div>
      </div>
      <div className="rc-title-head">
        <div className="rc-title-x1">
          <div className="wrap">
            <h1 className="rc-title fontSize-1">
              Lorem impsum dolor <br/> sit amet
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default coverPage