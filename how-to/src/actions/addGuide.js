import { axiosWithAuth } from '../utils/axiosWithAuth';

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';


export const addGuide = guide => dispatch => {
  dispatch({ type: ADD_START });
  axiosWithAuth()
    .post('https://how-to-diy.herokuapp.com/api/auth/projects', guide)
    .then(res => {
      console.log(res)
      dispatch({ type: ADD_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: ADD_FAILURE, payload: err })
    })
}