import React from 'react'
import App from '../App'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  let myStyle = {
    "background":"black"
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={myStyle}>
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}
