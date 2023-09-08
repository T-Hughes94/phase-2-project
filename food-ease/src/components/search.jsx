import React from 'react'
//this component handles the  search bar
function Search({setCurrentSearch}) {
  //this function is called when the user types in the search bar
  return (
    //this is the search bar container and input allowing the user to type in the search bar
    <div className="search-bar">
  
      <input
    
        type="text"
        placeholder="Search by Venue"
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search