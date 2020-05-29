import React from 'react';
import '../App.css';

const SearchBar = ({ setSearch }) => {
  const handleSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <div className='guidelist'>
      <h1>How-To Guides</h1>
      <h3 className='browse'>Browse the guides.</h3>

      <div className='search'>
        <form>
          <input
            type='text'
            placeholder='Search How-To'
            onChange={handleSearch}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchBar;