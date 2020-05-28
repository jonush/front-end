import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE, 
  GET_START,
  GET_SUCCESS,
  GET_FAILURE,
} from '../actions/fetchGuides';

export const initialState = {
  isFetching: false,
  isGetting: false,
  guides: [],
  guide: [],
  errors: ''
}

export const guidesReducer = (state = initialState, action) => {
  console.log('The reducer has been accessed');
  switch(action.type) {
    case FETCH_START:
      console.log('FETCH_START');
      return {
        ...state,
        isFetching: true
      }
    case FETCH_SUCCESS:
      console.log('FETCH_SUCCESS');
      return {
        ...state,
        isFetching: false,
        guides: action.payload
      }
    case FETCH_FAILURE:
      console.log('FETCH_FAILURE');
      return {
        ...state,
        errors: action.payload
      }
    case GET_START:
      console.log('GET_START');
      return {
        ...state,
        isGetting: true
      }
    case GET_SUCCESS:
      console.log('GET_SUCCESS');
      return {
        ...state,
        isGetting: false,
        guide: action.payload
      }
    case GET_FAILURE:
      console.log('GET_FAILURE');
      return {
        ...state,
        errors: action.payload
      }
    default: 
      return state
  }
}