import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import logo from '../../HowTo.png';

const GuideList = () => {
  const [ guides, setGuides ] = useState([]);
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    axiosWithAuth()
      .get('https://how-to-diy.herokuapp.com/projects/')
      .then(res => {
        console.log(res);
        setGuides(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleSearch = e => {
    setSearch(e.target.value);
  }

  const searchGuides = () => {
    const found = search.trim();
    return guides.filter(guide => {
      if(!found) {
        return guide;
      }
      else if(guide.title.toLowerCase().includes(found.toLowerCase())) {
        return guide;
      } 
    })
  }

  useEffect(() => {
    searchGuides();
  }, [search])

  return (
    <div className='guidelist'>
      <h1>How-To Guides</h1>

      <div className='search'>
        <form>
          <input
            type='text'
            placeholder='Search How-To'
            value={search}
            onChange={handleSearch}
          />
        </form>
      </div>

      {
        guides.map((guide, index) => (
          <Link  className='preview' to={`/projects/${guide.id}`} key={index}>
            <div className='preview-text'>
              <h1>{guide.title}</h1>
              <h3><Moment format='MM/DD/YYYY'>{guide.date}</Moment></h3>
            </div>
            <img src={logo}></img>
          </Link>
        ))
      }
    </div>
  )
}

export default GuideList;