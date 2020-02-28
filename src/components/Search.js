import React from 'react'

const Search = ({ onChange, onSubmit, stateValue, yearValue, keyUp, name, value }) => {
  return (
    <>
      <div className="search_prompt_text">
        To view crime statistics, please enter a state and a year in the YYYY format:
    </div>
      <form onSubmit={e => onSubmit(e)}>
        <input
          value={yearValue}
          onChange={e => onChange(e)}
          onKeyUp={keyUp}
          name="searchYear"
          type="text"
          placeholder="YYYY"
        />
        <input
          value={stateValue}
          onChange={e => onChange(e)}
          onKeyUp={keyUp}
          name="searchState"
          type="text"
          placeholder="State"
        />
        <br />
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default Search
