import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Moment from 'react-moment';
import Likes from '../content/Likes';
import logo from '../../HowTo.png';

const initialComment = {
  comments: '',
}

const Guide = () => {
  const [ edit, setEdit] = useState([]);
  const [ editing, setEditing ] = useState(false);
  const [ comments, setComments ] = useState([]);
  const [ comment, setComment ] = useState(initialComment);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    update();
  }, [])

  const update = () => {
    axiosWithAuth()
      .get(`https://how-to-diy.herokuapp.com/projects/${id}`)
      .then(res => {
        console.log('GET request for specific guide id', res);
        setEdit(res.data);
      })
      .then(
        axiosWithAuth()
          .get(`https://how-to-diy.herokuapp.com/comments/`)
          .then(res => setComments(res.data))
          .catch(err => console.log(err))
      )
      .catch(err => console.log(err));
  }

  const handleEdit = e => {
    setEdit({
      ...edit,
      date: new Date(),
      [e.target.name]: e.target.value
    })
  }

  const submitEdit = e => {
    axiosWithAuth()
      .put(`https://how-to-diy.herokuapp.com/projects/${id}`, edit)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setEditing(!editing);
    update();
  }

  const deleteGuide = () => {
    axiosWithAuth()
      .delete(`https://how-to-diy.herokuapp.com/projects/${id}`)
      .then(res => {
        console.log('DELETE request for guide', res)
        history.push('/dashboard');
      })
      .catch(err => console.log(err));
  }

  const handleComment = e => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value
    })
  }

  const addComment = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://how-to-diy.herokuapp.com/projects/comments/${id}`, comment)
      .then(res => console.log('POST request for comment', res))
      .catch(err => console.log(err))
    setComment(initialComment);
    update();
  }

  const deleteComment = () => {
    axiosWithAuth()
      .delete(`https://how-to-diy.herokuapp.com/comments/${id}`)
      .then(res => console.log('DELETE request for comment', res))
      .catch(err => console.log(err))
    update();
  }

  return (
    <>
    {!editing ?
    ( <> <div className='guide'>
      <img className='cover-img' src={logo} alt='no how-to cover image'></img>
      <div className='header'>
        <h1>{edit.title}</h1>
        <h2><Moment format='MM/DD/YYYY'>{edit.date}</Moment></h2>
      </div>

      <div className='details'>
        <h2>By: {edit.author}</h2>
        <Likes />
      </div>

      <h4>{edit.bodyText}</h4>

      <h3>Comments:</h3>
      {comments ? comments.map((post, index) => (
        <div className='comment' key={index}>
          <p onClick={deleteComment}>{post.comments}</p>
          <span className='deleteC'>Delete Comment</span>
        </div>
      )) : <p>There are no comments</p>}

      <form onSubmit={addComment}>
        <label>
          <input 
            type='text'
            name='comments'
            value={comment.comments}
            onChange={handleComment}
            placeholder='Add a comment'
          />
        </label>
        <button type='submit'>Comment</button>
      </form>
    </div>
    
    <div className='guide-buttons'>
      <button className='back' onClick={() => history.push('/dashboard')}>Back to How-To's</button>
      <button className='delete' style={{background: '#db332a'}} onClick={deleteGuide}>Delete How-To</button>
      <button onClick={() => setEditing(true)}>Edit How-To</button>
    </div>
    </>) : 
    (<div>
      <form className='new-guide' onSubmit={submitEdit}>
        <h1>EDIT GUIDE</h1>
        <label>Title:</label>
        <input
            type='text'
            name='title'
            value={edit.title}
            onChange={handleEdit}
            placeholder='Title'
        />

        <label>Description:</label>
        <textarea
            type='text'
            name='bodyText'
            value={edit.bodyText}
            onChange={handleEdit}
            placeholder='Description'
        />

        <label>Author:</label>
        <input
            type='text'
            name='author'
            value={edit.author}
            onChange={handleEdit}
            placeholder='Author'
        />
        
        <button type='submit'>Save</button>
        <button className='cancel' onClick={() => setEditing(!editing)}>Cancel</button>
      </form>
    </div>)}
    </>
  )
}

export default Guide;