// Dependencies
import React from 'react'

const cssImage = {
  width: '100%',
  height: '350px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat'
}

const imageCover = (props) => {
  return (
    <div className="rc-row rc-relative-position">
      <div style={{...props.imagen, ...cssImage}} className="rc-relative-position">
        <div className="rc-overlay imageBGoverlay"></div>
      </div>
    </div>
  )
}

export default imageCover