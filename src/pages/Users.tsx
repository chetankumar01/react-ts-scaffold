import * as React from 'react';
import { Link } from 'react-router-dom';

class Users extends React.PureComponent {
  public render() {
    return (
      <div className="uk-container uk-margin-top">
        <Link to="/" className="uk-button uk-button-primary">
          Add Another User
        </Link>
      </div>
    );
  }
}

export { Users };
