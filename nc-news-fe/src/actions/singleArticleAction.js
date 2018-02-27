import axios from 'axios';
import * as types from '../types';
import { FETCH_SINGLE_ARTICLE_FAILURE } from '../types';

export const fetchSingleArticleRequest = () => ({
  type: types.FETCH_SINGLE_ARTICLE_REQUEST
})

export const fetchSingleArticleSuccess = (data) => ({
  type: types.FETCH_SINGLE_ARTICLE_SUCCESS,
  payload: data
})

export const fetchSingleArticleFailure = (error) => ({
  type: types.FETCH_SINGLE_ARTICLE_FAILURE,
  payload: error
})


export function fetchSingleArticle(id){
  return function (dispatch){
      axios.get(`https://northcoders-news-api.herokuapp.com/api/articles/${id}`)
      .then(res => {
          dispatch(fetchSingleArticleSuccess(res.data))
       })
      .catch (err => {
        dispatch(fetchSingleArticleFailure(err))
    })
  }
}