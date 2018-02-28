import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchAllTopics} from '../actions/topicAction';
  
class TopicPage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <h2>TopicPage for {this.props.match.params.topic}</h2>
      
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.topics.loading,
    error: state.topics.error,
    topics: state.topics.payload
  };
}
function mapDispatchToProps(dispatch) {
  return {
fetchAllTopics: (data) => {
  dispatch(fetchAllTopics());
  }
      }
  };
  
export default connect (mapStateToProps, mapDispatchToProps)(TopicPage);