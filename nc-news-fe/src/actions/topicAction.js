import axios from 'axios';
import * as types from '../types';

export const fetchTopicsRequest = () => ({
  type: types.FETCH_TOPICS_REQUEST
});

export const fetchTopicsSuccess = (data) => ({
  type: types.FETCH_TOPICS_SUCCESS,
  payload: data
});

export const fetchTopicsFailure = (error) => ({
  type: types.FETCH_TOPICS_FAILURE,
  error: error
})

export function fetchAllTopics(data) {
  return function (dispatch) {
    axios.get('https://northcoders-news-api.herokuapp.com/api/topics')
    .then(res => {
      dispatch(fetchTopicsSuccess(res.data.topics))
    })
    .catch (err => {
      dispatch(fetchTopicsFailure(err))
    })
  }
}
  