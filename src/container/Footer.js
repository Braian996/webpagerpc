// Dependencies
import React from 'react'

// Assets
import 'font-awesome/css/font-awesome.css'
import '../css/Footer.css'

const footer = () => {
  return (
    <footer>
      <div className="rc-footer-content">
        <div className="wrap rc-text-center">
          <div className="rc-footer-social">
            <ul className="rc-social-media">
              <li>
                <a href="https://www.instagram.com/b.a.ledesma/" target="_blank" 
                rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank" 
                rel="noopener noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank" 
                rel="noopener noreferrer">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank" 
                rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="rc-footer-text">
            <p>&copy; 2019 Empresa. Code by JsBLA</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer