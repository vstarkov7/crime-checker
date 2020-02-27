import React from 'react'

const DisplayResults = (props) => {
  // const switchPrice = Number(stock.change) > 0 ? 'up' : 'down'
  // console.log(props)
  console.log(props.results)
  const specificStateData = props.results[0]
  return (
    <>

      {props.results.length === 0 ?
        <h1>Loading...</h1>
        :
        <div className="state_results_box">
          <h1>State: {specificStateData.state_abbr}</h1>
          <h1>Year: {specificStateData.year}</h1>
          <h1>Population: {specificStateData.population}</h1>
          <h1>Violent crime: {specificStateData.violent_crime}</h1>
          <h1>Homicide: {specificStateData.homicide}</h1>
          <h1>Rape: {specificStateData.rape_legacy}</h1>
          <h1>Robbery: {specificStateData.robbery}</h1>
          <h1>Aggravated assault: {specificStateData.aggravated_assault}</h1>
          <h1>Property crime: {specificStateData.property_crime}</h1>
          <h1>Burglary: {specificStateData.burglary}</h1>
          <h1>Larceny: {specificStateData.larceny}</h1>
          <h1>Motor vehicle theft: {specificStateData.motor_vehicle_theft}</h1>
          <h1>Arson: {specificStateData.arson}</h1>
        </div>
      }
    </>
  )
}

export default DisplayResults
