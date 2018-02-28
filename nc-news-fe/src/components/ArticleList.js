import React from 'react';
import PT from 'prop-types';

import ArticleListItem from './ArticleListItem';

const ArticleList = ({articles}) => {
  return (
    <div>
      {articles.map(article => {
        return (
          <ArticleListItem key={article._id} {...article} />
        )
      })}
    </div>
  )
}

ArticleList.propTypes = {
  articles: PT.array.isRequired
}

export default ArticleList;