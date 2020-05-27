import React, { useState } from 'react';
import { connect } from 'react-redux';
import heart from '../../heart.svg';
import outline from '../../love.svg';
import { getGuide } from '../../actions/fetchGuides';
import { editGuide } from '../../actions/editGuide';

const Likes = props => {
  const [ liked, setLiked ] = useState(false);
  const [ likes, setLikes ] = useState(guide.likes);

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
    <div>
      {!like ?
        <img style={{ width: '80px'}} onClick={toggleLike} src={heart}></img> :
        <img style={{ width: '80px'}} onClick={toggleLike} src={outline}></img>
      }
      <p>{guide.likes} likes</p>
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