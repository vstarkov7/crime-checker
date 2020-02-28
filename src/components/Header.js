import React from 'react'
import {
  Link
} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header_container">
      <div className="main_title">Crime Checker</div>
      <nav>
        <Link to={'/'}>
          Home
    </Link>
        <Link to={'/state_search'}>
          State Lookup
    </Link>
        <Link to={'/about_me'}>
          About Me
        </Link>
      </nav>
    </div>
  )
}

export default Header