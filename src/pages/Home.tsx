import * as React from 'react';
import { Link } from 'react-router-dom';
import { NewUserForm } from '../components';

class Home extends React.PureComponent {
  submitForm = (formValues: object) => {
    alert({ formValues });
  };
  public render() {
    return (
      <div className="uk-container uk-margin-top">
        <Link to="/users" className="uk-button uk-button-primary">
          See all Users
        </Link>
        <hr />
        <NewUserForm onSubmit={this.createNewUser} />
      </div>
    );
  }
}

export { Home };
