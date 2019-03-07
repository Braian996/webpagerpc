// Dependencies
import React from 'react'

// Components
import SubTitle from './SubTitle'

const rowFirstSegment = (props) => {
  return (
    <div className="rc-row margin-bottom-50 rc-relative-position">
      <SubTitle title={props.title} estiloCss={props.estiloCss} />
      <div className="rc-row">
        <div className="wrap">
          <div style={{display: 'table'}}>
            <div className="rc-x1-col">
              {props.parrafo}
            </div>
            <div className="rc-x1-col">
              <div>
                <div className={`rc-image ${props.imagen} rc-relative-position`}>
                  <div className="rc-image rc-overlay imageBGoverlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default rowFirstSegment
