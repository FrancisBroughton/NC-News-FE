import * as types from '../types';

export const initialState = {
  loading: false,
  error: null,
  payload: []
};

export default (prevState = initialState, action) => {
  switch (action.type) {

    case types.FETCH_ALL_ARTICLES_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null,
        payload: [],
    });
  
    case types.FETCH_ALL_ARTICLES_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        payload: action.payload
    });
  
    case types.FETCH_ALL_ARTICLES_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.payload,
        data: []
    });

    default: 
      return prevState;

  }
}
