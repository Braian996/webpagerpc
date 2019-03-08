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
    pathBefore: '',
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false)
    const pathName = window.location.pathname
    this.setState({ pathBefore: pathName })
    const menuLinkActive = this.state.menu.filter(item => {
      return item.url === pathName
    })
    if (menuLinkActive[0].id === 2 || menuLinkActive[0].id === 3 || menuLinkActive[0].id === 4) {
      const styleClass = 'menu-colorx2'
      const activeLinkeffect = 'link-activex2'
      this.setState({ styleClass, activeLinkeffect })
    }
  }

  componentDidUpdate() {
    if (this.state.pathBefore !== window.location.pathname) {
      this.setState({ pathBefore: window.location.pathname })
      const currentPath = window.location.pathname
      const menuLinkActive = this.state.menu.filter(item => {
        return item.url === currentPath
      })
      if (menuLinkActive[0].id === 2 || menuLinkActive[0].id === 3 || menuLinkActive[0].id === 4) {
        const styleClass = 'menu-colorx2'
        const activeLinkeffect = 'link-activex2'
        this.setState({ styleClass, activeLinkeffect })
      }
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
    if (idLink === 3) {
      styleClass = 'menu-colorx2'
      activeLinkeffect = 'link-activex2'
    } else {
      styleClass = 'menu-colorx1'
      activeLinkeffect = 'link-active'
    }
    this.setState({ styleClass, activeLinkeffect })
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
                <NavLink exact to={item.url} activeClassName={activeLinkeffect} 
                id={item.id} onClick={(event) => this.activeLinkMenu(event)}>
                {item.title}</NavLink>
              ) : (
                <NavLink to={item.url} activeClassName={activeLinkeffect}
                id={item.id} onClick={(event) => this.activeLinkMenu(event)}>
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