// Dependencies
import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

// Assets
import '../css/Header.css'

class Header extends Component {

  state = {
    effectMenu: '',
    menu: [
      {
        title: 'Inicio',
        url: '/',
        active: true,
        id: 1,
      },
      {
        title: 'Servicios',
        url: '/servicios',
        active: false,
        id: 2,
      },
      {
        title: 'Nosotros',
        url: '/nosotros',
        active: false,
        id: 3,
      },
      {
        title: 'Contactos',
        url: '/contactos',
        active: false,
        id: 4,
      }
    ],
    styleClass: 'menu-colorx1',
    activeLinkeffect: 'link-active',
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false)
    const pathName = window.location.pathname
    if (pathName === '/nosotros') {
      let styleClass = ''
      let activeLinkeffect = ''
      const newData = this.state.menu.map(item => {
        if (item.id === 3) {
          item.active = true
        } else {
          item.active = false
        }

        return item
      })

      styleClass = 'menu-colorx2'
      activeLinkeffect = 'link-activex2'
      this.setState({ menu: newData, styleClass, activeLinkeffect })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const heightToShow = 80
    const effectMenu = 'menu-effect-actived'

    if (window.pageYOffset > heightToShow) this.setState({effectMenu})

    if (window.pageYOffset < heightToShow) this.setState({effectMenu: ''})
  }

  activeLinkMenu = (event) => {
    const idLink = parseInt(event.target.id)
    let styleClass = ''
    let activeLinkeffect = ''
    const newData = this.state.menu.map(item => {
      if (item.id === idLink) {
        item.active = true
      } else {
        item.active = false
      }

      return item
    })

    if (idLink === 3) {
      styleClass = 'menu-colorx2'
      activeLinkeffect = 'link-activex2'
    } else {
      styleClass = 'menu-colorx1'
      activeLinkeffect = 'link-active'
    }
    this.setState({ menu: newData, styleClass, activeLinkeffect })
  }

  render () {
    const { effectMenu, menu, styleClass, activeLinkeffect } = this.state

    return (
      <header>
        <nav className={effectMenu}>
          <div className="logo">JsBLA</div>
          <ul>
            {menu.map((item) => {
              const linkMarkUp = item.active ? (
                <NavLink to={item.url} className={activeLinkeffect} id={item.id} 
                onClick={event => this.activeLinkMenu(event)}>
                {item.title}</NavLink>
              ) : (
                <NavLink to={item.url}
                onClick={event => this.activeLinkMenu(event)} id={item.id}>
                {item.title}</NavLink>
              )
              return (
                <li key={item.id} className={styleClass}>
                  {linkMarkUp}
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header