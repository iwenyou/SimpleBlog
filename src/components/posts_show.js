import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { deletePost} from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component{
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });

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
        <Link to="/" className="btn btn-primary">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-left"
          onClick={this.onDeleteClick.bind(this)}
          >
          Delete
        </button>

      </div>
    );
  };
}

function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost,deletePost })(PostsShow);
