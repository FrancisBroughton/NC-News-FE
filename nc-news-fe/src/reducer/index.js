import { combineReducers } from 'redux';
import articles from './articles';
// import comments from './comments';
// import topics from './topics';
// import users from './users';
const reducer = combineReducers ({
  articles: articles
});

export default reducer;
 