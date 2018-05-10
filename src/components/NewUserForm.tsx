import * as React from 'react';
import { Form, Text } from 'react-form';
import * as validator from 'validator';

class NewUserForm extends React.Component {
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.props.onSubmit} className="form-horizontal">
          <Text
            field="firstName"
            validate={() => {
              validator.isString(firstName);
            }}
          />
          <button className="btn btn-default" type="submit">
            Submit
          </button>
        </Form>
      </div>
    );
  }
}

const validate = (
  values: NewUserFormData,
  props: NewUserFormProps,
): FormErrors<NewUserFormData> => {
  const { firstName, lastName, email } = values;

  const errors: FormErrors<NewUserFormData> = {};

  if (!firstName) {
    errors.firstName = 'Required';
  }

  if (!lastName) {
    errors.lastName = 'Required';
  }

  if (!email) {
    errors.email = 'Required';
  }

  return errors;
};

NewUserForm = reduxForm({
  form: 'newUserForm', // a unique identifier for this form,
  validate,
})(NewUserForm);

export { NewUserForm };
