import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}:</label>
        <input type="text" className="form-control" {...field.input}/>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          <Field label="Title" name="title" component={this.renderField}/>
          <Field label="Categories" name="categories" component={this.renderField}/>
          <Field label="Post Content" name="content" component={this.renderField}/>
        </form>
      </div>
    );
  };
}

function validate(value){
  //console.log(value) => {title:xxx, categories:xxx, content:xxx}
  const error = {};

  if(!value.title){
    errors.title = "enter a title!";
  };

  //validate inputs from value
  //if error is empty, the form is fine to submit.
  //if error has ANY properties, redux form assume form is invaild

  return error;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
