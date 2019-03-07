// Depencies
import React, {Component} from 'react'

// Components
import CoverPage from './CoverPage'
import RowThirdSegment from './RowThirdSegment'

// Assets
import '../css/Home.css'
import bgImage from '../img/2.jpg'


class Home extends Component {
  render () {
    const imageBG = {
      backgroundImage: `url(${bgImage})`,
    }

    return (
      <div className="rc-main">
        <CoverPage imagen={imageBG} />
        <RowThirdSegment title="Nosotros" estiloCss="rc-text-center-title" />
      </div>
    )
  }
}

export default Home