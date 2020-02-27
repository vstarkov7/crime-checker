import React from 'react'
import {
  Link,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      Welcome to the Crime Checker app! You can look up crime statistics for any US state <Link to={'/state_search'}>here!</Link>
    </div>
  )
}

export default Home