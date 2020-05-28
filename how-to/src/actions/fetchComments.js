import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

export const fetchComments = id => dispatch => {
  dispatch({ type: LOAD_START });
  axiosWithAuth()
    .get(`https://how-to-diy.herokuapp.com/comments/${id}`)
    .then(res => {
      console.log(res)
      dispatch({ type: LOAD_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: LOAD_FAILURE, payload: err })
    })
}