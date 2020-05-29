import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import logo from '../../HowTo.png';

const GuideList = ({ guides }) => {
  return (
    <div>
      {
        guides.map((guide, index) => {
          return <Link  className='preview' to={`/projects/${guide.id}`} key={index}>
            <div className='preview-text'>
              <h1>{guide.title}</h1>
              <h3><Moment format='MM/DD/YYYY'>{guide.date}</Moment></h3>
            </div>
            <img src={logo}></img>
          </Link>
        })
      }
    </div>
  )
}

export default GuideList;