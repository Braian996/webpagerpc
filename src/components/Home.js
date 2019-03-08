// Depencies
import React, {Component} from 'react'

// Components
import CoverPage from './CoverPage'
import RowThirdSegment from './RowThirdSegment'
import ButtonFlat from './ButtonFlat'
import ImageCover from './ImageCover'

// Assets
import '../css/Home.css'
import Image001 from '../img/1.jpg'
import bgImage from '../img/2.jpg'
import 'font-awesome/css/font-awesome.css'
import '../css/Footer.css'


class Home extends Component {
  goToNosotrosPage = () => {
    this.props.history.push('/nosotros')
  }

  render () {
    const imageBG = {
      backgroundImage: `url(${bgImage})`,
    }
    const image01 = {
      backgroundImage: `url(${Image001})`
    }
    const icono = (
      <i className="fa fa-arrow-right" 
      style={{marginLeft: '8px'}}></i>
    )

    return (
      <div className="rc-main">
        <CoverPage imagen={imageBG} />
        <RowThirdSegment title="Nosotros" estiloCss="rc-text-center-title">
          <ButtonFlat handleClick={() => this.goToNosotrosPage()}>
            <label>Leer más</label>
            {icono}
          </ButtonFlat>
        </RowThirdSegment>
        <ImageCover imagen={image01} />
      </div>
    )
  }
}

export default Home