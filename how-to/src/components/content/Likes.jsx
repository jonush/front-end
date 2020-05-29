import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import heart from '../../heart.svg';
import outline from '../../love.svg';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from '../../useLocalStorage';

const Likes = props => {
  const [ liked, setLiked ] = useState(false);
  const { id } = useParams();
  const [ likes, setLikes ] = useLocalStorage('likes', []);

  useEffect(() => {
    axiosWithAuth()
      .get(`https://how-to-diy.herokuapp.com/projects/${id}`)
      .then(res => {
        console.log('GET request for likes', res);
        setLikes(res.data);
      })
      .catch(err => console.log(err));
  }, [id])

  const toggleLike = e => {
    e.preventDefault();

    if(liked === false) {
      setLikes({
        ...likes,
        likes: Number(likes.likes) + 1
      });
      setLiked(true);
    } 
    else if(liked === true) {
      setLikes({
        ...likes,
        likes: Number(likes.likes) - 1
      });
      setLiked(false);
    }
  }

  useEffect(() => {
    axiosWithAuth()
      .put(`https://how-to-diy.herokuapp.com/projects/${id}`, likes)
      .then(res => console.log('PUT request for likes', res))
      .catch(err => console.log(err));
  }, [liked])

  return (
    <div className='likes'>
      <h2>{likes.likes} </h2>
      {!liked ?
        <img className='heart' onClick={toggleLike} src={outline}></img> :
        <img className='heart' onClick={toggleLike} src={heart}></img>
      }
    </div>
  )
}

export default Likes;