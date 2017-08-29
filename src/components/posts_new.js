import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}:</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
      {field.meta.touched ? field.meta.error: ""}
      </div>
    );
  }

  onSubmit(values){
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderField}/>
          <Field label="Categories" name="categories" component={this.renderField}/>
          <Field label="Post Content" name="content" component={this.renderField}/>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  };
}

function validate(value){
  //console.log(value) => {title:xxx, categories:xxx, content:xxx}
  const errors = {};

  if(!value.title){
    errors.title = "enter a title";
  };
  if(!value.categories){
    errors.categories = "enter a categories";
  };
  if(!value.content){
    errors.content = "enter a content";
  };

  //validate inputs from value
  //if error is empty, the form is fine to submit.
  //if error has ANY properties, redux form assume form is invaild

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
