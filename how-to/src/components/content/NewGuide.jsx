import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addGuide } from '../../actions/addGuide';

const initialGuide = ({
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
      <form onSubmit={createGuide}>
        <h1>NEW GUIDE</h1>
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

        <button type='submit'>Create How-To</button>
        <button onClick={toggleCreating}>Cancel</button>
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