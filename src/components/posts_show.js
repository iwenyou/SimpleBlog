import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component{
  componentDidMount() {
    { id } = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render() {
    return(
      <div>

      </div>
    );
  };
}

function mapStateTpProps({ post }, ownProps){
  return { post: posts[ownProps.match.params.id] };
}

export default connect(null, { fetchPost })(PostsShow);
