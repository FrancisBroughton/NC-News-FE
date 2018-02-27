import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllArticles } from '../actions/articleAction';

  
class Articles extends Component {
  constructor(props) {
    super(props)
}

componentDidMount() {
  this.props.fetchAllArticles()
}

render() {
      return (
 
        <div className="body">

        <div className="title">
    
            <li><h1>All articles</h1></li>
            
        </div>

            {this.props.articles.map((article, i) => {
                    return (
                        <div key={i} className="article">
                            <ul>
                                <li> <span>Article ID:</span> {article._id}</li>
                                <li> <span>Article Title:</span>
                                        <Link to={`/Articles/${article._id}`}> {article.title} </Link> </li>
                                <li> <span>Created By: </span>{article.created_by}</li>
                                <li> <span>Category: </span>{article.belongs_to}</li>
                                <br />
                                <li> {article.body}</li>
                            </ul>
                        </div>
                    )
                }
            )}
        </div>
    );
  }
}

function mapStateToProps(state) {
return {
    loading: state.articles.loading,
    error: state.articles.error,
    articles: state.articles.payload
};
}
function mapDispatchToProps(dispatch) {
    return {
    fetchAllArticles: (data) => {
        dispatch(fetchAllArticles());
    }
    };
}

              

export default connect(mapStateToProps,mapDispatchToProps)(Articles);