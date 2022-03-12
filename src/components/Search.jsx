import React from 'react'

const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className='Search'>
        Search: <input type="text" ref={searchInput} value={search} onChange={handleSearch}></input>
    </div>
  )
}

export default Search