import React from 'react'

const Search = ({ onChange, onSubmit, stateValue, yearValue, name, value }) => {
  return (
    <form onSubmit={e => onSubmit(e)}>
      <input
        value={yearValue}
        onChange={e => onChange(e)}
        name="searchYear"
        type="text"
        placeholder="YYYY"
      />
      <input
        value={stateValue}
        onChange={e => onChange(e)}
        name="searchState"
        type="text"
        placeholder="State"
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
