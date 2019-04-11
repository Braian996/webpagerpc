// Dependencies
import React from 'react';
import {
  render
} from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom'

// Components
import AppRoutes from './routers'

// Assets
import './css/index.css';


render(
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
)