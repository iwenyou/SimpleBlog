import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component{
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>loading...</div>;
    }

    return(
      <div>
        <h3>Title: { post.title}</h3>
        <h4>Category: { post.categories }</h4>
        <p>Content: { post.content }</p>
      </div>
    );
  };
}

function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
