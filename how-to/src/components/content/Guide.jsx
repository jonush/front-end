import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import { getGuide } from '../../actions/fetchGuides';
import { editGuide } from '../../actions/editGuide';
import { deleteGuide } from '../../actions/deleteGuide';

const Guide = props => {
  const { access, setAccess } = useState(false);
  const [ edit, setEdit] = useState([]);
  const [ editing, setEditing ] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const addComment = e => {
    e.preventDefault();
    props.editGuide(edit, id);
  }

  useEffect(() => {
    setEdit(props.getGuide(id));
    console.log('Editing this guide:', edit);
  }, [id])

  // REVISE CONDITION FOR ACCESSING EDIT/DELETE BUTTONS
  useEffect(() => {
    return edit.id === id ? setAccess(true) : null
  })

  const handleEdit = e => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value
    })
  }

  // REVISE PUT REQUEST FOR EDITING GUIDES
  const submitEdit = (e, id) => {
    e.preventDefault();
    props.editGuide(edit, id);
    setEditing(false);
  }

  return (
    <>
    {!editing ?
    (edit && <div>
      <img src={edit.img} alt='how-to cover'></img>
      <h1>{edit.title}</h1>
      <h3><Moment format='MM/DD/YYYY'>{edit.date}</Moment></h3>
      <h3>{edit.likes}</h3>
      <p>{edit.description}</p>
      <h3>Comments:</h3>
      {edit.comments && edit.comments.map((comment, index) => (
        <div>
          <h3  key={index}>{comment.username}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
      <form onSubmit={addComment}>
        <label>
          <input 
            type='text'
            name='comment'
            value={edit.comment}
            onChange={addComment}
            placeholder='Add a comment'
          />
        </label>
        <button type='submit'>Comment</button>
      </form>
      {access && <button onClick={() => setEditing(true)}>Edit How-To</button>}
      {access && <button className='delete' onClick={() => props.deleteGuide}>Delete How-To</button>}
    </div>) : 
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
            name='description'
            value={edit.title}
            onChange={handleEdit}
            placeholder='Description'
          />
        </label>
        
        <button type='submit'>Save</button>
        <button className='cancel' onClick={() => setEditing(false)}>Cancel</button>
      </form>
    </div>)}

    <button onClick={() => history.push('/dashboard')}>Back to How-To's</button>
    </>
  )
}

// const mapStateToProps = state => {
//   return {
//     isGetting: state.guides.isGetting,
//     guide: state.guides.guide,
//     errors: state.guides.errors
//   }
// }

export default connect(null, {getGuide, editGuide, deleteGuide})(Guide);