import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { addGuide } from '../actions/addGuide';
import SearchBar from './SearchBar';
import GuideList from './content/GuideList';
import NewGuide from './content/NewGuide';
import '../App.css';

const Dashboard = props => {
  const [ guides, setGuides ] = useState([]);
  const [ search, setSearch ] = useState('');

  const getGuide = () => {
    const found = search.trim();
    return guides.filter(guide => {
      if(!found) {
        return guide
      }
      if(guide.title.toLowerCase().includes(found.toLowerCase())) {
        return guide
      }
    })
  }

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
  }, [props.isAdding])

  return (
    <div className='dashboard'>
      <GuideList guides={getGuide()} />
      <SearchBar setSearch={setSearch} />
      <NewGuide />
      <h2>Create your own How-To guide:</h2>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAdding: state.add.isAdding
  }
}

export default connect(mapStateToProps, {addGuide})(Dashboard);