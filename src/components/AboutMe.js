import React from 'react'
import {
  Link,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

const AboutMe = (props) => {
  return (
    <div className="home_body">
      <div className="home_container">
        Created by Slava Starkov, 2020
      </div>
      <div className="home_container">
        Email: vstarkov@mail.com
      </div>
    </div>
  )
}

export default AboutMe