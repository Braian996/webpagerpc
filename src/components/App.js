// Dependencies
import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

// Containers
import Header from '../container/Header'
import Content from '../container/Content'
import Footer from '../container/Footer'

// Assets
import '../css/App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const {
      children
    } = this.props

    return ( 
      <div className = "App" >
        <Header />
        <Content body= {children} />
        <Footer />
      </div>
    )
  }
}

export default App