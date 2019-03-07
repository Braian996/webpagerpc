// Dependencies
import React, { Component } from 'react'

// Components
import RowFirstSegment from './RowFirstSegment'
import RowSecondSegment from './RowSecondSegment'

// Assets
import '../css/AboutUs.css'

import data from '../data'


class AboutUs extends Component {

  render () {
    return (
      <div className="margin-top-100">
        <RowFirstSegment title={data[0].title} parrafo={data[0].parrafo}
        imagen="image5" estiloCss="rc-text-left-title" />
        <RowSecondSegment title={data[1].title} parrafo={data[1].parrafo}
        imagen="image4" estiloCss="rc-text-right-title" />
      </div>
      
    )
  }
}

export default AboutUs