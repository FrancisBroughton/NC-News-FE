import React from 'react';
import PT from 'prop-types';

const ArticleListItem = ({title}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

ArticleListItem.propTypes = {
  title: PT.string.isRequired
}

export default ArticleListItem;