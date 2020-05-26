import { axiosWithAuth } from '../utils/axiosWithAuth';

export const EDIT_START = 'EDIT_START';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAILURE = 'EDIT_FAILURE';

export const editGuide = (edit, id) => dispatch => {
  dispatch({ type: EDIT_START, payload: edit});
  axiosWithAuth()
    .put(`/guides/${id}`, edit)
    .then(res => {
    console.log(res)
      dispatch({ type: EDIT_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: EDIT_FAILURE, payload: err })
    })
}