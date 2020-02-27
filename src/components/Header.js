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
      <Link to={'/state_search'}>
        Go to state search
    </Link>
      <Link to={'/'}>
        Go home
    </Link>
    </nav>
    </div>
  )
}

export default Header