import React from 'react'

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
          <div className="state_result">Population: {specificStateData.population}</div>
          <div className="state_result">Violent crime: {specificStateData.violent_crime}</div>
          <div className="state_result">Homicide: {specificStateData.homicide}</div>
          <div className="state_result">Rape (legacy): {specificStateData.rape_legacy}</div>
          <div className="state_result">Rape (revised): {specificStateData.rape_revised}</div>
          <div className="state_result">Robbery: {specificStateData.robbery}</div>
          <div className="state_result">Aggravated assault: {specificStateData.aggravated_assault}</div>
          <div className="state_result">Property crime: {specificStateData.property_crime}</div>
          <div className="state_result">Burglary: {specificStateData.burglary}</div>
          <div className="state_result">Larceny: {specificStateData.larceny}</div>
          <div className="state_result">Motor vehicle theft: {specificStateData.motor_vehicle_theft}</div>
          <div className="state_result">Arson: {specificStateData.arson}</div>
        </div>
      }
    </div>
  )
}

export default DisplayResults
