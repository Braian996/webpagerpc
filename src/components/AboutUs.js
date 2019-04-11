// Dependencies
import React, { Component } from 'react'

// Components
import RowFirstSegment from './RowFirstSegment'
import RowSecondSegment from './RowSecondSegment'

// Assets
import '../css/AboutUs.css'

import data from '../data/data'


class AboutUs extends Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render () {
    return (
      <div className="margin-top-100">
        <RowFirstSegment title={data[0].title} paragraph={data[0].paragraph}
        imageProp="image5" styleClass="rc-text-left-title" />
        <RowSecondSegment title={data[1].title} paragraph={data[1].paragraph}
        imageProp="image4" styleClass="rc-text-right-title" />
      </div>
      
    )
  }
}

export default AboutUs