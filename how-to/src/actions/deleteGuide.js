import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const deleteGuide = id => dispatch => {
  const history = useHistory();
  dispatch({ type: DELETE_START, payload: id});
  axiosWithAuth()
    .delete(`/guides/${id}`)
    .then(res => {
      console.log(res)
      dispatch({ type: DELETE_SUCCESS, payload: res.data})
      history.push('/dashboard');
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DELETE_FAILURE, payload: err })
    })
}