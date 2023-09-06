import React from 'react'

function Search({setCurrentSearch}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search Projections"
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search