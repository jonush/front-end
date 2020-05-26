import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getGuide } from '../../actions/fetchGuides';
import { editGuide } from '../../actions/editGuide';
import { deleteGuide } from '../../actions/deleteGuide';

const Guide = props => {
  const { hasAccess, setAccess } = useState(false);
  const [ edit, setEdit] = useState([]);
  const [ editing, setEditing ] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    setEdit(props.getGuide(id));
  }, [id])

  // REVISE CONDITION FOR SETTING ACCESS
  useEffect(() => {
    if(edit.id === id){
      setAccess(true)
    } else { return null }
  })

  const handleEdit = e => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value
    })
  }

  const submitEdit = (e, id) => {
    e.preventDefault();
    props.editGuide(edit, id);
    setEditing(false);
  }

  return (
    <>
    {!editing ?
    (<div>
      <img src={edit.img} alt='how-to cover'></img>
      <h1>{edit.title}</h1>
      <p>{edit.description}</p>
      {hasAccess && <button onClick={() => setEditing(true)}>Edit How-To</button>}
      {hasAccess && <button onClick={() => props.deleteGuide}>Delete How-To</button>}
    </div>) : 
    (<div>
      <form onSubmit={submitEdit}>
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
        <button onClick={() => setEditing(false)}>Cancel</button>
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