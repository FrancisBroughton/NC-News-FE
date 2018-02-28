
 import React, { Component } from 'react';
 import {Link} from 'react-router-dom'
 import { connect } from 'react-redux';
 import { fetchAllArticles } from '../actions/articleAction';

 import ArticleList from './ArticleList';


 
 class Homepage extends Component {
     constructor(props) {
         super(props)
     }
 
     componentDidMount() {
         this.props.fetchAllArticles()
     }
 
     render() {
        const {articles, loading, error} = this.props;
         return (
            <div id="HomePage">
                <h1>Latest Articles</h1>
                {
                    loading 
                        ? <p>Loading...</p> 
                        : <ArticleList  articles={articles} />
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);