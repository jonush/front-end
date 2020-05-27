import React, { useState } from 'react';

const SearchBar = props => {
  const [ search, setSearch ] = useState('');

  const searchGuides = e => {
    e.preventDefault();
    props.guides(search);
  }

  return (
    <div className='search'>
      <form onSubmit={searchGuides}>
        <input
          type='text'
          placeholder='Search How-To'
          name=''
          value=''
          onChange={e => setSearch(e.target.value)}
        />

        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;