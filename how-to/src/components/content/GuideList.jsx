import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGuides } from '../../actions/fetchGuides';
import SearchBar from '../SearchBar';

const GuideList = props => {
  useEffect(() => {
    props.fetchGuides();
  }, [])

  return (
    <div className='guidelist'>
      <h1>How-To Guides</h1>

      <SearchBar guides={props.guides} />
      
      {props.isFetching && <h2 className='loading'>Loading How-To Guides...</h2>}

      { props.guides && 
        props.guides.map((guide, index) => (
          <Link to={`/guides/${guide.id}`} key={index}>
            <div className='preview'>
              <img src={guide.img} alt='how-to cover'></img>
              <h1>{guide.title}</h1>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.guides.isFetching,
    guides: state.guides.guides,
    errors: state.guides.errors
  }
}

export default connect(mapStateToProps, {fetchGuides})(GuideList);