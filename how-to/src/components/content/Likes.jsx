import React, { useState } from 'react';
import { connect } from 'react-redux';
import heart from '../../heart.svg';
import outline from '../../love.svg';
import { getGuide } from '../../actions/fetchGuides';
import { editGuide } from '../../actions/editGuide';
import { useParams } from 'react-router-dom';

const Likes = props => {
  const { guide } = props;
  const [ liked, setLiked ] = useState(false);
  const [ likes, setLikes ] = useState(guide.likes);
  const { id } = useParams();

  const toggleLike = e => {
    e.preventDefault();

    if(likes === guide.likes) {
      setLikes(guide.likes + 1)
    } else if(likes = guide.likes + 1) {
      setLikes(guide.likes - 1)
    }
    
    props.editGuide(likes, id);
    setLiked(!liked);
  }

  return (
    <div className='likes'>
      {!liked ?
        <img style={{ width: '80px'}} onClick={toggleLike} src={outline}></img> :
        <img style={{ width: '80px'}} onClick={toggleLike} src={heart}></img>
      }
      <h3>{guide.likes} likes</h3>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isGetting: state.guides.isGetting,
    guide: state.guides.guide,
    errors: state.guides.errors
  }
}

export default connect(mapStateToProps, {getGuide, editGuide})(Likes);