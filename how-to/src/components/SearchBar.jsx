import React, { useState } from 'react';

const SearchBar = ({ searchGuide }) => {
  const searchGuides = e => {
    const search = e.target.value;
    searchGuide(search);
  }

  return (
    <div className='search'>
      <form onSubmit={searchGuides}>
        <input
          type='text'
          placeholder='Search How-To'
          onChange={searchGuide}
        />

        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;