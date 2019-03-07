// Dependencies
import React from 'react'
import {Route, Switch} from 'react-router-dom'

// Components
import App from './components/App'
import Home from './components/Home'
import AboutUs from './components/AboutUs'

const AppRoutes = () => 
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/nosotros' component={AboutUs} />
    </Switch>
  </App>;

export default AppRoutes