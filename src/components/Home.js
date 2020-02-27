import React from 'react'
import fingerprint_image from '../img/crime_fingerprint_brush.png'
import {
  Link,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

const Home = (props) => {
  return (
    <div className="home_body">
      <div className="home_container">
        Welcome to the Crime Checker app, which uses FBI's API to access crime statistics. You can look up crime statistics for any US state <Link to={'/state_search'}>here!</Link>
      </div>
      <img src={fingerprint_image} alt="Image of a fingerprint" />

    </div>
  )
}

export default Home