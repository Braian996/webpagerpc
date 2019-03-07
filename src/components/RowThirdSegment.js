// Dependencies
import React from 'react'

// Component
import SubTitle from './SubTitle'

const rowThirdSegment = (props) => {
  return (
    <div className="rc-row rc-relative-position margin-bottom-50">
      <SubTitle title={props.title} estiloCss={props.estiloCss} />
      <div className="rc-row">
        <div className="wrap">
          <div style={{display: 'table'}}>
            <div className="rc-x2-col">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Magni, laborum! Sit 
              repellat dicta, quae nostrum autem facere 
              nulla est accusantium quaerat debitis 
              reiciendis odit exercitationem corrupti! 
              Dolor accusantium repellendus eligendi.
              Lorem ipsum dolor sit amet consectetur, adipisicing 
              elit. Molestias rerum odio nemo alias repellat, 
              voluptates, hic tempore nobis aut consequatur 
              fugiat sed optio. Nihil sapiente quam nobis 
              veritatis? Iure, adipisci?
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default rowThirdSegment