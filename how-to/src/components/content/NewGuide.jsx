import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addGuide } from '../../actions/addGuide';

const initialGuide = ({
  title: '',
  bodyText: '',
  image: '',
  likes: 0,
  author: '',
  date: new Date(),
})

const NewGuide = props => {
  const [ guide, setGuide ] = useState(initialGuide);
  const [ creating, setCreating ] = useState(false);

  const handleInput = e => {
    setGuide({
      ...guide,
      [e.target.name]: e.target.value
    })
  }

  const createGuide = e => {
    e.preventDefault();
    props.addGuide(guide);
    setCreating(!creating);
    setGuide(initialGuide);
  }

  return(
    !creating ? 
    (<button className='create' onClick={() => setCreating(!creating)}>Create</button>) :
    (<div>
      {props.isAdding && <h2>Creating your guide...</h2>}
      <form className='new-guide' encType="multipart/form-data" onSubmit={createGuide}>
        <h1>NEW GUIDE</h1>
        <label htmlFor='image'>Select a cover image:</label>
        <input
          id='file'
          type='file'
          accept='image/*'
          name='image'
          value={guide.image}
          onChange={handleInput}
        />

        <label>
          <input
            type='text'
            name='title'
            value={guide.title}
            onChange={handleInput}
            placeholder='Title'
          />
        </label>

        <label>
          <input
            type='text'
            name='author'
            value={guide.author}
            onChange={handleInput}
            placeholder='Author'
          />
        </label>

        <label>
          <textarea
            type='text'
            name='bodyText'
            value={guide.bodyText}
            onChange={handleInput}
            placeholder='Description'
          />
        </label>

        <div className='create-buttons'>
          <button className='cancel' onClick={() => setCreating(!creating)}>Cancel</button>
          <button type='submit'>Create How-To</button>
        </div>
      </form>
    </div>)
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isAdding: state.add.isAdding,
    guide: state.add.guide,
    errors: state.add.errors
  }
} 

export default connect(mapStateToProps, {addGuide})(NewGuide);