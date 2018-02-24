
 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { fetchAllArticles } from '../actions/articleAction';

 
 class Homepage extends Component {
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
            
                 
                 <h1>Latest Articles</h1>
              
               
             </div>
 
                 {this.props.articles.map((article, i) => {
                     if (i < 10) {
                         return (
                             <div key={i} className="article">
                                 <ul>
                                     <li> <span>Article ID:</span> {article._id}</li>
                                     <li> <span>Article Title:</span> {article.title}</li>
                                    <li> <span>Created By: </span>{article.created_by}</li> 
                                    <li> <span>Category: </span>{article.belongs_to}</li>
                                    <br />
                                    <li> {article.body}</li>
                                </ul>
                            </div>
                        )
                    }
                })}
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         loading: state.articles.loading,
//         error: state.articles.error,
// //         articles: state.articles.payload
// //     };
// // }
// function mapDispatchToProps(dispatch) {
//     return {
//         fetchAllArticles: (data) => {
//             dispatch(fetchAllArticles());
//         }
//     };
// }

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);