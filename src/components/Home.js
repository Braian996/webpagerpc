// Depencies
import React, {Component} from 'react'

// Assets
import '../css/Home.css'
import bgImage from '../img/2.jpg'


class Home extends Component {
  render () {
    const imageBG = {
      backgroundImage: `url(${bgImage})`,
    }
    const imageBGoverlay = {
      backgroundColor: 'rgba(12, 12, 12, .6)',
    } 

    return (
      <div className="rc-main">
        <div className="rc-container-title-head">
          <div className="rc-bg-image">
            <div style={imageBG}></div>
            <div style={imageBGoverlay}></div>
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
      </div>
    )
  }
}

export default Home