import React from 'react'

const subTitle = (props) => {
  return (
    <div className="rc-titlex2-content">
      <div style={{display: 'table', width: '100%'}}>
        <div className={`rc-titlex2 rc-container-text ${props.estiloCss} borderx5`}>
          <label>{props.title}</label>
        </div>
      </div>
    </div>
  )
}

export default subTitle