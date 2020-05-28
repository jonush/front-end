import {
  LOAD_START,
  LOAD_SUCCESS,
  LOAD_FAILURE
} from '../actions/fetchComments';

export const initialState = {
  isLoading: false,
  comments: [],
  errors: '',
}

export const commentsReducer = (state = initialState, action) => {
  console.log('The reducer has been accessed');
  switch(action.type) {
    case LOAD_START:
      console.log('LOAD_START');
      return {
        ...state,
        isLoading: true
      }
    case LOAD_SUCCESS:
      console.log('LOAD_SUCCESS');
      return {
        ...state,
        isLoading: false,
        comments: action.payload
      }
    case LOAD_FAILURE:
      console.log('LOAD_FAILURE');
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      }
    default: 
      return state
  }
}