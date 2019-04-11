// Dependencies
import React from 'react'

// Components
import SubTitle from './SubTitle'

const rowSecondSegment = (props) => {
  return (
    <div className="rc-row rc-relative-position margin-bottom-50">
      <SubTitle title={props.title} styleClass={props.styleClass} />
      <div className="rc-row">
        <div className="wrap">
          <div style={{display: 'table'}}>
            <div className="rc-x1-col">
              <div>
                <div className={`rc-image ${props.imageProp} rc-relative-position`}>
                  <div className="rc-image rc-overlay imageBGoverlay"></div>
                </div>
              </div>
            </div>
            <div className="rc-x1-col">
              <div>
                {props.paragraph}
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default rowSecondSegment