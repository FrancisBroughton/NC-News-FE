import axios from 'axios';
import * as types from '../types';
 
export const fetchAllArticlesRequest= ()=>  ({
    type: types.FETCH_ALL_ARTICLES_REQUEST
});

export const fetchAllArticlesSuccess = (data) => ({
  type: types.FETCH_ALL_ARTICLES_SUCCESS,
  payload: data
})

export const fetchAllArticlesFailure = (error) => ({
  type: types.FETCH_ALL_ARTICLES_FAILURE,
  payload: error
})

export function fetchAllArticles(data){
  return function (dispatch){
      axios.get('https://northcoders-news-api.herokuapp.com/api/articles')
      .then(res => {
          dispatch(fetchAllArticlesSuccess(res.data.articles))
      })
      .catch (err => {
          dispatch(fetchAllArticlesFailure(err))
      })
  }
}

