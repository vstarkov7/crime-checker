import React from 'react'
import {
  Link,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header_container">
      <h1>Crime Checker App</h1>
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