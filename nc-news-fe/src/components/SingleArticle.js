import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleArticle } from '../actions/singleArticleAction';


class SingleArticle extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSingleArticle(this.props.match.params.articles_id)
  } 

  render() {
    return (
      <div className="body"> 
        <h1> { this.props.articles.title } </h1>

        <p> <br/> 
          {this.props.articles.body} </p>
    
        <ul>
          <li>Author {this.props.articles.created_by} </li>
          <li>Votes {this.props.articles.votes} </li>
        </ul>
      </div>
    )
  };
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
    fetchSingleArticle: (id) => {
        dispatch(fetchSingleArticle(id));
    }
  };
}

            
export default connect(mapStateToProps,mapDispatchToProps)(SingleArticle);