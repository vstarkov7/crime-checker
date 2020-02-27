import React from 'react'
import DisplayResults from './DisplayResults'
import Search from './Search'

const StateSearch = (props) => {
  return (
    <>
      <Search
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        stateValue={props.stateValue}
        yearValue={props.yearValue}
        name="searchQuery"
       />
      <DisplayResults
        results={props.results}
      />
    </>
  )
}

export default StateSearch