import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addGuide } from '../../actions/addGuide';

const initialGuide = ({
  image: '',
  title: '',
  description: '',
})

const NewGuide = props => {
  const [ newGuide, setNewGuide ] = useState(initialGuide);
  const [ creating, setCreating ] = useState(false);

  const toggleCreating = () => {
    setCreating(true);
  }

  const handleInput = e => {
    setNewGuide({
      ...newGuide,
      [e.target.name]: e.target.value
    })
  }

  const createGuide = e => {
    e.preventDefault();
    props.addGuide(newGuide);
    setCreating(false);
  }

  return(
    !creating ? 
    (<button className='create' onClick={toggleCreating}>Create a How-To</button>) :
    (<div>
      {props.isAdding && <h2>Creating your guide...</h2>}
      <form className='new-guide' onSubmit={createGuide}>
        <h1>NEW GUIDE</h1>
        <label htmlFor='image'>Select a cover image:</label>
        <input
          id='image'
          type='file'
          accept='image/*'
          name='image'
          value={newGuide.image}
          onChange={handleInput}
        />

        <label>
          <input
            type='text'
            name='title'
            value={newGuide.title}
            onChange={handleInput}
            placeholder='Title'
          />
        </label>

        <label>
          <textarea
            type='text'
            name='description'
            value={newGuide.description}
            onChange={handleInput}
            placeholder='Description'
          />
        </label>

        <div className='create-buttons'>
          <button className='cancel' onClick={toggleCreating}>Cancel</button>
          <button type='submit'>Create How-To</button>
        </div>
      </form>
    </div>)
  )
}

const mapStateToProps = state => {
  return {
    isAdding: state.add.isAdding,
    guide: state.add.guide,
    errors: state.add.errors
  }
} 

export default connect(mapStateToProps, {addGuide})(NewGuide);