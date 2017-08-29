import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component{
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return(
      <div>

      </div>
    );
  };
}

export default connect(null, { fetchPost })(PostsShow);
