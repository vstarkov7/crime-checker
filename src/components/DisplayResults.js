import React from 'react'
import detective_image from '../img/crime_detective2.png'

const DisplayResults = (props) => {
  // const switchPrice = Number(stock.change) > 0 ? 'up' : 'down'
  // console.log(props)
  console.log(props.results)
  const specificStateData = props.results[0]
  return (
    <div className="results_container">

      {props.results.length === 0 ?
        <div></div>
        :
        <div className="state_results_box">
          <div className="state_results_header">Crime Stats for {specificStateData.state_abbr} in {specificStateData.year}:</div>
          <div className="state_results_body">
            <div className="state_results_info">
              <div className="state_result"><div className="state_result_name">Population</div> <div className="state_result_number">{specificStateData.population}</div></div>
              <div className="state_result"><div className="state_result_name">Violent crime</div> <div className="state_result_number">{specificStateData.violent_crime}</div></div>
              <div className="state_result"><div className="state_result_name">Homicide</div> <div className="state_result_number">{specificStateData.homicide}</div></div>
              <div className="state_result"><div className="state_result_name">Rape (legacy)</div> <div className="state_result_number">{specificStateData.rape_legacy}</div></div>
              <div className="state_result"><div className="state_result_name">Rape (revised)</div> <div className="state_result_number">{specificStateData.rape_revised}</div></div>
              <div className="state_result"><div className="state_result_name">Robbery</div> <div className="state_result_number">{specificStateData.robbery}</div></div>
              <div className="state_result"><div className="state_result_name">Aggravated assault</div> <div className="state_result_number">{specificStateData.aggravated_assault}</div></div>
              <div className="state_result"><div className="state_result_name">Property crime</div> <div className="state_result_number">{specificStateData.property_crime}</div></div>
              <div className="state_result"><div className="state_result_name">Burglary</div> <div className="state_result_number">{specificStateData.burglary}</div></div>
              <div className="state_result"><div className="state_result_name">Larceny</div> <div className="state_result_number">{specificStateData.larceny}</div></div>
              <div className="state_result"><div className="state_result_name">Motor vehicle theft</div> <div className="state_result_number">{specificStateData.motor_vehicle_theft}</div></div>
              <div className="state_result"><div className="state_result_name">Arson</div> <div className="state_result_number">{specificStateData.arson}</div></div>
            </div>
            <div className="state_results_img">
              <img src={detective_image} alt="Picture of a detective" />
            </div>

          </div>
        </div>
      }
    </div>
  )
}

export default DisplayResults
