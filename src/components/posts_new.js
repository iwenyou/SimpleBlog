import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderTitleField(field){
    return (
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return(
      <div>
        <form>
          <Field
            name="title"
            component={this.renderTitleField}
          />
        <Field
          name="tags"
          component={this.renderTagsField}
          />
        </form>
      </div>
    );
  };
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
