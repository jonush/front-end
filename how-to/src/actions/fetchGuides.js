import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchGuides = () => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth()
    .get('https://how-to-diy.herokuapp.com/projects/')
    .then(res => {
      console.log(res)
      dispatch({ type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_FAILURE, payload: err })
    })
}

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

export const getGuide = id => dispatch => {
  dispatch({ type: GET_START });
  axiosWithAuth()
    .get(`https://how-to-diy.herokuapp.com/projects/${id}`)
    .then(res => {
      console.log(res)
      dispatch({ type: GET_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: GET_FAILURE, payload: err })
    })
}