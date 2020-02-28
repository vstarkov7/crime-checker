import React from 'react'
import image_not_found from '../img/404_crime.png'


const NotFound = () => {
  return (
    <div className="not_found">
      <img src={image_not_found} alt="404 page not found" />
    </div>
  )
}

export default NotFound