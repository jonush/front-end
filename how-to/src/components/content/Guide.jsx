import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import Moment from 'react-moment';
import { fetchComments } from '../../actions/fetchComments';
//import Likes from '../content/Likes';
import heart from '../../heart.svg';

const Guide = props => {
  const [ edit, setEdit] = useState([]);
  const [ editing, setEditing ] = useState(false);
  const [ access, setAccess ] = useState(false);
  const [ comment, setComment ] = useState('');
  const history = useHistory();
  const { id } = useParams();

  //REVISE CONDITION FOR ACCESSING EDIT/DELETE BUTTONS
  useEffect(() => {
    return edit.id === id ? setAccess(true) : undefined
  })

  useEffect(() => {
    setEdit(props.getGuide(id));
    props.fetchComments(id);
  }, [id])

  const handleEdit = e => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value
    })
  }

  const submitEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`https://how-to-diy.herokuapp.com/projects/${id}`, edit)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setEditing(!editing);
  }

  const deleteGuide = () => {
    axiosWithAuth()
      .delete(`https://how-to-diy.herokuapp.com/projects/${id}`)
      .then(res => {
        console.log(res)
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
      .post(`https://how-to-diy.herokuapp.com/comments/${id}`, comment)
      .then(res => console.log('POST request for comment', res))
      .catch(err => console.log(err))
    setComment('');
  }

  return (
    <>
    {!editing ?
    (edit && <> <div className='guide'>
      <img className='cover-img' src={edit.img} alt='how-to cover'></img>
      <h1>{edit.title}</h1>
      <h2><Moment format='MM/DD/YYYY'>{edit.date}</Moment></h2>

      <div className='likes'>
        <img className='heart' src={heart}></img>
        <h3>{edit.likes} likes</h3>
      </div>

      <p>{edit.bodyText}</p>

      <h3>Comments:</h3>
      {comment ? comment.map((post, index) => (
        <div className='comment' key={index}>
          {/* <span>{post.username}</span> */}
          <p>{post}</p>
        </div>
      )) : <h2>There are no comments</h2>}

      <form onSubmit={addComment}>
        <label>
          <input 
            type='text'
            name='comment'
            value={comment}
            onChange={handleComment}
            placeholder='Add a comment'
          />
        </label>
        <button type='submit'>Comment</button>
      </form>
    </div>
    
    <div className='guide-buttons'>
      <button className='back' onClick={() => history.push('/dashboard')}>Back to How-To's</button>
      {access && <button className='delete' style={{background: '#db332a'}}onClick={deleteGuide}>Delete How-To</button>}
      {access && <button onClick={() => setEditing(!editing)}>Edit How-To</button>}
    </div>
    </>) : 
    (<div>
      <form onSubmit={submitEdit(edit, edit.id)}>
        <h1>EDIT GUIDE</h1>
        <label>
          <input
            type='text'
            name='title'
            value={edit.title}
            onChange={handleEdit}
            placeholder='Title'
          />
        </label>

        <label>
          <input
            type='text'
            name='bodyText'
            value={edit.bodyText}
            onChange={handleEdit}
            placeholder='Description'
          />
        </label>
        
        <button type='submit'>Save</button>
        <button className='cancel' onClick={() => setEditing(!editing)}>Cancel</button>
      </form>
      <button className='back' onClick={() => history.push('/dashboard')}>Back to How-To's</button>
    </div>)}
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.comments.isLoading,
    comments: state.comments.comments,
    errors: state.comments.errors
  }
}

export default connect(mapStateToProps, {fetchComments})(Guide);