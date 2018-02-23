import { expect } from 'chai';
import * as types from './types';
import { initialState } from '../reducer/articles';
import articlesReducer from './reducer';
import {
  fetchAllArticlesRequest,
  fetchAllArticlesSuccess,
  fetchAllArticlesfailure
}
  from '../actions/articlesAction';

const prevState = initialState || prevstate;

describe('arcticles reducer tests', () => {
  describe('default behaviour', () => {
    it('returns prevstate if unrecognised action is passed', () => {
      const action = { type: "something" };
      const newState = articlesReducer(prevstate, action);
      expect(newState.articles).to.equal(prevState);
    });
    it('uses the initial state if no prevState is passed', () => {
      const action = { type: "fetchAllArticleRequest" };
      const newState = articlesReducer(undefined, action);
      expect(newState.articles).to.equal(initialState);
    });

    it('handles fetchAllArticlesRequest', () => {
      const action = fetchAllArticlesRequest();
      const newState = articlesReducer(prevState, action);
      expect(newState.articles.loading).to.eql(true);
      expect(newState.articles.error).to.eql(null);
      expect(newState.articles.payload).to.eql([]);
    });
    it('handles fetchAllArticlesSuccess', () => {
      const data = "hello";
      const action = fetchAllArticlesSuccess(data);
      const newState = articlesReducer(prevState, action);
      expect(newState.articles.payload).to.be.equal("hello");
      expect(newState.articles.error).to.be.equal(null);
      expect(newState.articles.loading).to.be.equal(true);
    });
    it('should return the correct action for fetchArticlesFailure', () => {
      const error = 'error';
      const action = fetchAllArticlesFailure(error);
      const newState = articlesReducer(prevState, action);
      expect(newState.articles.error).to.be.equal('error')
      expect(newState.articles.loading).to.be.equal(false)
      expect(newState.articles.payload).to.be.eql([])
    });
  });
})
