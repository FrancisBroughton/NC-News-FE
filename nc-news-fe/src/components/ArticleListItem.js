import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom'


const ArticleListItem = ({title, comments}) => {
  return (
    <div>
      <Link to='/Articles/{_id}'><h2>{title}</h2></Link>
      <h2>Comments: {comments}</h2>
    </div>
  )
}

ArticleListItem.propTypes = {
  title: PT.string.isRequired
}

export default ArticleListItem;