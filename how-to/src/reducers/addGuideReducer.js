import {
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE,
} from '../actions/addGuide';

export const initialState = {
  isAdding: false,
  guide: [],
  errors: '',
}

export const addGuideReducer = (state = initialState, action) => {
  console.log('The reducer has been accessed');
  switch(action.type) {
    case ADD_START:
      console.log('ADD_START');
      return {
        ...state,
        isAdding: true
      }
    case ADD_SUCCESS:
      console.log('ADD_SUCCESS');
      return {
        ...state,
        isAdding: false,
        guide: [ ...state.guide, action.payload ]
      }
    case ADD_FAILURE:
      console.log('ADD_FAILURE');
      return {
        ...state,
        isAdding: false,
        errors: action.payload
      }
    default: 
      return state
  }
}